// e2e/portfolio.spec.js
import { test, expect } from '@playwright/test';

test.describe('Portfolio', () => {
  test('deve carregar a página inicial', async ({ page }) => {
    await page.goto('/');

    // Verifica se a página carregou
    await expect(page).toHaveTitle(/henrique/i);
  });

  test('deve navegar entre seções', async ({ page }) => {
    await page.goto('/');

    // Clica em um link do sidebar
    await page.click('text=Projetos');

    // Verifica se a seção apareceu
    await expect(page.locator('h2')).toContainText('Projetos');
  });

  test('deve trocar o idioma', async ({ page }) => {
    await page.goto('/');

    // Clica no botão de idioma
    await page.click('[data-testid="language-switch"]');

    // Verifica se o texto mudou
    await expect(page.locator('text=About')).toBeVisible();
  });
});
