import fs from "node:fs";

const html = fs.readFileSync("../landing.html", "utf8");
const style = html.match(/<style>([\s\S]*?)<\/style>/i)?.[1];
let body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];

if (!style || !body) {
  throw new Error("Cannot parse landing.html");
}

body = body.replace(/<script>[\s\S]*?<\/script>\s*$/i, "").trim();

const notFoundCss = `

.not-found-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 32px; background: linear-gradient(135deg, #f7f5ff 0%, #ffffff 58%, #eef7ff 100%); }
.not-found-panel { width: min(520px, 100%); border: 1px solid var(--primary-border); border-radius: 24px; background: rgba(255,255,255,0.92); padding: 40px; box-shadow: 0 20px 70px rgba(65,55,249,0.14); text-align: center; }
.not-found-kicker { color: var(--primary); font-size: 18px; font-weight: 800; letter-spacing: 0; margin-bottom: 10px; }
.not-found-panel h1 { color: var(--text-dark); font-size: 34px; line-height: 42px; margin-bottom: 12px; }
.not-found-panel p { color: var(--text-secondary); font-size: 16px; line-height: 24px; }
.not-found-button { display: inline-flex; align-items: center; justify-content: center; margin-top: 24px; padding: 12px 18px; border-radius: 10px; background: var(--primary); color: #fff; font-size: 16px; font-weight: 500; }
@media (max-width: 480px) { .not-found-panel { padding: 28px 20px; } .not-found-panel h1 { font-size: 28px; line-height: 36px; } }
`;

const escaped = body
  .replace(/\\/g, "\\\\")
  .replace(/`/g, "\\`")
  .replace(/\$\{/g, "\\${");

fs.writeFileSync("app/globals.css", `${style.trim()}${notFoundCss}`);
fs.writeFileSync("generated/landing-body.ts", `export const landingBody = \`${escaped}\`;\n`);

console.log({ cssBytes: style.length, bodyBytes: body.length });
