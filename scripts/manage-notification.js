const fs = require('fs');
const path = require('path');
const readline = require('readline');

const configPath = path.join(__dirname, '..', 'config', 'notification.json');

// Ensure config exists
if (!fs.existsSync(configPath)) {
    console.error('Config file not found!');
    process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('\n🔔 Manage Notification Bar\n');
console.log(`Current Status: ${config.enabled ? '✅ Enabled' : '❌ Disabled'}`);
console.log(`Current Message: "${config.message}"`);
console.log(`Current Color: ${config.backgroundColor}`);
console.log('-----------------------------------');
console.log('1. Toggle On/Off');
console.log('2. Change Message');
console.log('3. Change Background Color');
console.log('4. Change Text Color');
console.log('5. Exit');

rl.question('\nSelect an option (1-5): ', (answer) => {
    switch (answer.trim()) {
        case '1':
            config.enabled = !config.enabled;
            saveConfig();
            console.log(`\nNotification bar is now ${config.enabled ? 'ENABLED' : 'DISABLED'}.`);
            rl.close();
            break;
        case '2':
            rl.question('\nEnter new message: ', (msg) => {
                config.message = msg;
                saveConfig();
                console.log('\nMessage updated.');
                rl.close();
            });
            break;
        case '3':
            rl.question('\nEnter background color (hex/name): ', (color) => {
                config.backgroundColor = color;
                saveConfig();
                console.log('\nBackground color updated.');
                rl.close();
            });
            break;
        case '4':
            rl.question('\nEnter text color (hex/name): ', (color) => {
                config.textColor = color;
                saveConfig();
                console.log('\nText color updated.');
                rl.close();
            });
            break;
        case '5':
            console.log('Exiting...');
            rl.close();
            break;
        default:
            console.log('Invalid option.');
            rl.close();
            break;
    }
});

function saveConfig() {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log('✅ Configuration saved!');
}
