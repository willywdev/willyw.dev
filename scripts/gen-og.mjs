import sharp from "sharp";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0c0e13"/>
  <circle cx="980" cy="130" r="280" fill="#3b82f6" opacity="0.12"/>
  <rect x="90" y="84" width="84" height="84" rx="18" fill="#14171f"/>
  <path d="M106 113 L116 146 L132 124 L148 146 L158 113" fill="none" stroke="#3b82f6" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="90" y="340" font-family="Arial, Helvetica, sans-serif" font-size="88" font-weight="800" fill="#ffffff">Wilhelm Werwein</text>
  <text x="93" y="408" font-family="Arial, Helvetica, sans-serif" font-size="34" fill="#bcc2cd">Technical Lead &amp; Senior JavaScript Engineer</text>
  <text x="93" y="566" font-family="monospace" font-size="28" fill="#3b82f6">willyw.dev</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile("public/og.png");
console.log("og image generated");
