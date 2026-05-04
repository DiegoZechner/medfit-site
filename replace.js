const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  let files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      filelist = walkSync(path.join(dir, file), filelist);
    }
    else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        filelist.push(path.join(dir, file));
      }
    }
  });
  return filelist;
};

const files = walkSync('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  const replacements = [
    { from: /text-text-muted/g, to: 'text-muted' },
    { from: /text-text/g, to: 'text-ink' },
    { from: /bg-background/g, to: 'bg-shell' },
    { from: /bg-surface/g, to: 'bg-white' },
    { from: /border-border/g, to: 'border-line' },
    { from: /hover:bg-accent-secondary/g, to: 'hover:opacity-90' },
    { from: /bg-accent/g, to: 'bg-aqua' },
    { from: /text-accent/g, to: 'text-aqua' },
    { from: /border-accent/g, to: 'border-aqua' },
    { from: /ring-accent/g, to: 'ring-aqua' },
    { from: /text-sage/g, to: 'text-sand' },
    { from: /bg-sage\/20/g, to: 'bg-sand\/20' },
    { from: /text-slate-900/g, to: 'text-ink' },
    { from: /text-slate-800/g, to: 'text-ink' },
    { from: /text-slate-700/g, to: 'text-muted' },
    { from: /text-slate-600/g, to: 'text-muted' },
    { from: /text-slate-500/g, to: 'text-muted' },
    { from: /bg-slate-50\/80/g, to: 'bg-shell' },
    { from: /bg-slate-50/g, to: 'bg-shell' },
    { from: /border-slate-100\/80/g, to: 'border-line' },
    { from: /border-slate-100/g, to: 'border-line' },
    { from: /border-slate-200/g, to: 'border-line' },
    { from: /bg-slate-900/g, to: 'bg-slate' },
    { from: /hover:bg-slate-800/g, to: 'hover:opacity-90' },
  ];

  replacements.forEach(({from, to}) => {
    content = content.replace(from, to);
  });

  content = content.replace(/className="([^"]*\b)rounded(\b[^"]*)"/g, (match, p1, p2) => {
    if (p2.includes('p-') && p2.includes('shadow')) {
      return `className="${p1}rounded-2xl${p2}"`;
    }
    return `className="${p1}rounded-xl${p2}"`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
  }
});
