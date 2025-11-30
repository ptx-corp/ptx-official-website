const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    { key: 'titleEn', question: 'Press Title (English): ' },
    { key: 'titleTh', question: 'Press Title (Thai): ' },
    { key: 'descriptionEn', question: 'Short Description (English): ' },
    { key: 'descriptionTh', question: 'Short Description (Thai): ' },
    { key: 'category', question: 'Category (press/award/event/partnership/community/media) [default: press]: ' },
    { key: 'date', question: 'Date (YYYY-MM-DD) [default: today]: ' },
    { key: 'pinned', question: 'Pinned? (y/N): ' }
];

const pressData = {};

const ask = (index) => {
    if (index === questions.length) {
        createPress();
        rl.close();
        return;
    }

    const q = questions[index];
    rl.question(q.question, (answer) => {
        pressData[q.key] = answer;
        ask(index + 1);
    });
};

const createPress = () => {
    const titleEn = pressData.titleEn || 'Untitled Press Release';
    const titleTh = pressData.titleTh || titleEn; // Fallback to EN if empty

    // Create slug from English title
    const slug = titleEn
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    const today = new Date().toISOString().split('T')[0];
    const date = pressData.date ? pressData.date.trim() : today;

    const category = pressData.category ? pressData.category.trim().toLowerCase() : 'press';
    const pinned = pressData.pinned.toLowerCase() === 'y';

    const descriptionEn = pressData.descriptionEn || '';
    const descriptionTh = pressData.descriptionTh || descriptionEn;

    // Template generator function
    const generateContent = (title, description, isThai = false) => `---
title: "${title.replace(/"/g, '\\"')}"
description: "${description.replace(/"/g, '\\"')}"
date: "${date}"
category: "${category}"
${pinned ? 'pinned: true\n' : ''}---

# ${title}

${isThai ? 'เนื้อหาข่าว...' : 'Press release content...'}
`;

    // Define paths
    const enDir = path.join(__dirname, '..', '_press', 'en');
    const thDir = path.join(__dirname, '..', '_press', 'th');

    // Ensure directories exist
    if (!fs.existsSync(enDir)) fs.mkdirSync(enDir, { recursive: true });
    if (!fs.existsSync(thDir)) fs.mkdirSync(thDir, { recursive: true });

    const enFilePath = path.join(enDir, `${slug}.md`);
    const thFilePath = path.join(thDir, `${slug}.md`);

    // Write files
    fs.writeFileSync(enFilePath, generateContent(titleEn, descriptionEn));
    fs.writeFileSync(thFilePath, generateContent(titleTh, descriptionTh, true));

    console.log(`\n✅ Press item created successfully:`);
    console.log(`   - EN: _press/en/${slug}.md`);
    console.log(`   - TH: _press/th/${slug}.md`);
};

console.log('🚀 Generate New Press/Activity Item\n');
ask(0);
