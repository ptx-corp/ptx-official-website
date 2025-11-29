const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    { key: 'title', question: 'Project Title: ' },
    { key: 'excerpt', question: 'Short Excerpt: ' },
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
    const title = projectData.title || 'Untitled Project';
    const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)+/g, '');

    const date = new Date().toISOString().split('T')[0];
    const tags = projectData.tags
        ? projectData.tags.split(',').map(t => `'${t.trim()}'`).join(', ')
        : '';

    const coverImage = projectData.coverImage || '/projects/placeholder.jpg';
    const featured = projectData.featured.toLowerCase() === 'y';

    const content = `---
title: '${title.replace(/'/g, "''")}'
date: '${date}'
excerpt: '${projectData.excerpt.replace(/'/g, "''")}'
coverImage: '${coverImage}'
${featured ? 'featured: true\n' : ''}tags: [${tags}]
---

## Project Overview

Describe the project here...

### Key Features

*   Feature 1
*   Feature 2
*   Feature 3

### Technologies Used

*   Tech 1
*   Tech 2
`;

    const filePath = path.join(__dirname, '..', '_projects', `${slug}.md`);

    fs.writeFileSync(filePath, content);
    console.log(`\n✅ Project created successfully at: _projects/${slug}.md`);
};

console.log('🚀 Generate New Project\n');
ask(0);
