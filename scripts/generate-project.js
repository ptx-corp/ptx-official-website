const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    { key: 'titleEn', question: 'Project Title (English): ' },
    { key: 'titleTh', question: 'Project Title (Thai): ' },
    { key: 'excerptEn', question: 'Short Excerpt (English): ' },
    { key: 'excerptTh', question: 'Short Excerpt (Thai): ' },
    { key: 'tags', question: 'Tags (comma separated): ' },
    { key: 'coverImage', question: 'Cover Image Path (default: /projects/placeholder.jpg): ' },
    { key: 'featured', question: 'Featured? (y/N): ' }
];

const projectData = {};

const ask = (index) => {
    if (index === questions.length) {
        createProject();
        rl.close();
        return;
    }

    const q = questions[index];
    rl.question(q.question, (answer) => {
        projectData[q.key] = answer;
        ask(index + 1);
    });
};

const createProject = () => {
    const titleEn = projectData.titleEn || 'Untitled Project';
    const titleTh = projectData.titleTh || titleEn; // Fallback to EN if empty

    // Create slug from English title
    const slug = titleEn
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    const date = new Date().toISOString().split('T')[0];
    const tags = projectData.tags
        ? projectData.tags.split(',').map(t => `'${t.trim()}'`).join(', ')
        : '';

    const coverImage = projectData.coverImage || '/projects/placeholder.jpg';
    const featured = projectData.featured.toLowerCase() === 'y';

    // Template generator function
    const generateContent = (title, excerpt, isThai = false) => `---
title: '${title.replace(/'/g, "''")}'
date: '${date}'
excerpt: '${excerpt.replace(/'/g, "''")}'
coverImage: '${coverImage}'
${featured ? 'featured: true\n' : ''}tags: [${tags}]
---

## ${isThai ? 'ภาพรวมโครงการ' : 'Project Overview'}

${isThai ? 'อธิบายโครงการที่นี่...' : 'Describe the project here...'}

### ${isThai ? 'คุณสมบัติหลัก' : 'Key Features'}

*   ${isThai ? 'คุณสมบัติ 1' : 'Feature 1'}
*   ${isThai ? 'คุณสมบัติ 2' : 'Feature 2'}
*   ${isThai ? 'คุณสมบัติ 3' : 'Feature 3'}

### ${isThai ? 'เทคโนโลยีที่ใช้' : 'Technologies Used'}

*   Tech 1
*   Tech 2
`;

    // Define paths
    const enDir = path.join(__dirname, '..', '_projects', 'en');
    const thDir = path.join(__dirname, '..', '_projects', 'th');

    // Ensure directories exist
    if (!fs.existsSync(enDir)) fs.mkdirSync(enDir, { recursive: true });
    if (!fs.existsSync(thDir)) fs.mkdirSync(thDir, { recursive: true });

    const enFilePath = path.join(enDir, `${slug}.md`);
    const thFilePath = path.join(thDir, `${slug}.md`);

    // Write files
    fs.writeFileSync(enFilePath, generateContent(titleEn, projectData.excerptEn));
    fs.writeFileSync(thFilePath, generateContent(titleTh, projectData.excerptTh, true));

    console.log(`\n✅ Projects created successfully:`);
    console.log(`   - EN: _projects/en/${slug}.md`);
    console.log(`   - TH: _projects/th/${slug}.md`);
};

console.log('🚀 Generate New Project\n');
ask(0);
