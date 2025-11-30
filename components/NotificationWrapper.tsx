import fs from 'fs';
import path from 'path';
import { NotificationBar } from "./NotificationBar";

export function NotificationWrapper() {
    try {
        const configPath = path.join(process.cwd(), 'config', 'notification.json');

        // Check if file exists
        if (!fs.existsSync(configPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(configPath, 'utf8');
        const config = JSON.parse(fileContents);

        return <NotificationBar config={config} />;
    } catch (error) {
        console.error("Error loading notification config:", error);
        return null;
    }
}
