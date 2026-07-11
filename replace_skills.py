import re

with open('index.html', 'r') as f:
    content = f.read()

replacement = """        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          <!-- Frontend Card -->
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[420px] group">
            <div>
              <div class="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg shadow-orange-500/20">
                <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-2xl font-extrabold text-dark mb-3">Frontend Development</h3>
              <p class="text-secondary text-sm leading-relaxed mb-6">Membangun antarmuka interaktif dan responsif dengan fokus pada pengalaman pengguna yang luar biasa.</p>
            </div>
            <div class="flex flex-wrap gap-2 mt-auto">
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="HTML 5"><img src="img/html-5.svg" alt="HTML 5" class="w-4 h-4 object-contain" /><span>HTML 5</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="CSS 3"><img src="img/css-3.svg" alt="CSS 3" class="w-4 h-4 object-contain" /><span>CSS 3</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="JavaScript"><img src="img/javascript.svg" alt="JavaScript" class="w-4 h-4 object-contain" /><span>JavaScript</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="TypeScript"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" class="w-4 h-4 object-contain" /><span>TypeScript</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="React.js"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React.js" class="w-4 h-4 object-contain" /><span>React.js</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="Next.js"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" class="w-4 h-4 object-contain" /><span>Next.js</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="Tailwind CSS"><img src="img/tailwindcss-icon.svg" alt="Tailwind CSS" class="w-4 h-4 object-contain" /><span>Tailwind CSS</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="Bootstrap"><img src="img/bootstrap.svg" alt="Bootstrap" class="w-4 h-4 object-contain" /><span>Bootstrap</span></div>
            </div>
          </div>

          <!-- Backend Card -->
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[420px] group">
            <div>
              <div class="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/20">
                <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
              </div>
              <h3 class="text-2xl font-extrabold text-dark mb-3">Backend & Databases</h3>
              <p class="text-secondary text-sm leading-relaxed mb-6">Merancang arsitektur logika aplikasi, keamanan, dan manajemen data yang tangguh di sisi server.</p>
            </div>
            <div class="flex flex-wrap gap-2 mt-auto">
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="Node.js"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" class="w-4 h-4 object-contain" /><span>Node.js</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="Express.js"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express.js" class="w-4 h-4 object-contain" /><span>Express.js</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="Prisma ORM"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" alt="Prisma ORM" class="w-4 h-4 object-contain" /><span>Prisma ORM</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="MySQL"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL" class="w-4 h-4 object-contain" /><span>MySQL</span></div>
            </div>
          </div>

          <!-- Tools Card -->
          <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between min-h-[420px] md:col-span-2 lg:col-span-1 group">
            <div>
              <div class="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg shadow-emerald-500/20">
                <svg class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-extrabold text-dark mb-3">Tools & Devops</h3>
              <p class="text-secondary text-sm leading-relaxed mb-6">Memanfaatkan alat bantu pengembangan untuk kolaborasi yang efisien dan alur kerja yang optimal.</p>
            </div>
            <div class="flex flex-wrap gap-2 mt-auto">
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="Git"><img src="img/git-icon.svg" alt="Git" class="w-4 h-4 object-contain" /><span>Git</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="GitHub"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" class="w-4 h-4 object-contain" /><span>GitHub</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="VS Code"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" alt="VS Code" class="w-4 h-4 object-contain" /><span>VS Code</span></div>
              <div class="flex items-center gap-1.5 bg-slate-50 border border-slate-100/60 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors" title="Figma"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" class="w-4 h-4 object-contain" /><span>Figma</span></div>
            </div>
          </div>
        </div>"""

pattern = r'        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">.*?</div>\n      </div>\n    </section>\n    <!-- Skills End -->'
match = re.search(pattern, content, flags=re.DOTALL)

if match:
    new_content = content[:match.start()] + replacement + '\n      </div>\n    </section>\n    <!-- Skills End -->' + content[match.end():]
    with open('index.html', 'w') as f:
        f.write(new_content)
    print("Replacement successful.")
else:
    print("Pattern not found!")
