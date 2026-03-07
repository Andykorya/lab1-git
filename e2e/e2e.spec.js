import { test, expect } from '@playwright/test';
import path from 'path';

test('Додавання нового завдання користувачем', async ({ page }) => {
    // Вказуємо правильний шлях: папка Source -> index.html
    const filePath = 'file:///' + path.resolve('Source', 'index.html').replace(/\\/g, '/');
    
    // 1. Відкриваємо сторінку
    await page.goto(filePath);

    // 2. Знаходимо поле вводу і вписуємо текст
    await page.fill('#taskInput', 'Пройти E2E тестування');
    
    // 3. Натискаємо кнопку "Додати завдання"
    await page.click('#addTaskBtn');

    // 4. Перевіряємо, чи з'явилося завдання у списку
    const taskItem = page.locator('.task-item');
    await expect(taskItem).toHaveText('Пройти E2E тестування');
});