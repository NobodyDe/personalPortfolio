// e2e/portfolio.spec.js
import { test, expect } from '@playwright/test';

test.describe('Portfolio', () => {
  test('deve carregar a página inicial', async ({ page }) => {
    // Acessa a raiz (o i18n faz o redirect para /pt ou /en automaticamente)
    await page.goto('/');

    // Confere se o title da aba
    await expect(page).toHaveTitle(/henrique/i);

    // Garante que o nome renderizou na sidebar
    await expect(
      page.getByRole('heading', { level: 2, name: /Henrique/i }),
    ).toBeVisible();
  });

  test('deve navegar entre seções usando i18n', async ({ page }) => {
    // Força ir pt-br pra não dar ruim na busca de texto
    await page.goto('/pt');

    // Clica no menu de Projetos
    const linkProjetos = page.getByRole('link', { name: /projetos/i });
    await linkProjetos.waitFor({ state: 'visible' });
    await linkProjetos.click();

    // Vê se a seção de Projetos apareceu na tela
    const h3Projetos = page.getByRole('heading', {
      level: 3,
      name: /projetos/i,
    });
    await expect(h3Projetos).toBeVisible();
  });

  test('deve trocar o idioma interativamente', async ({ page }) => {
    await page.goto('/pt');

    // Pega o botão de idioma pelo arialabel
    const switchLanguageButton = page.getByRole('button', {
      name: /Switch language to/i,
    });
    await switchLanguageButton.waitFor({ state: 'visible' });
    await switchLanguageButton.click();

    // A URL tem que mudar pro ingles
    await expect(page).toHaveURL(/.*\/en.*/);

    // confere se o link do menu mudou de "projetos" pra "projects"
    const urlCorreta = page.url();
    if (urlCorreta.includes('/en')) {
      await expect(page.getByRole('link', { name: /projects/i })).toBeVisible();
    }
  });
});
