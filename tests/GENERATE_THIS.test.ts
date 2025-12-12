import { describe, it, expect, beforeAll } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('GENERATE_THIS.md Specification Document', () => {
  let content: string;
  let sections: Map<string, string>;

  beforeAll(() => {
    const filePath = join(process.cwd(), 'GENERATE_THIS.md');
    content = readFileSync(filePath, 'utf-8');
    
    // Parse sections from the markdown
    sections = new Map();
    const sectionRegex = /^#+\s+(.+?)$/gm;
    const matches = [...content.matchAll(sectionRegex)];
    
    matches.forEach((match, index) => {
      const sectionTitle = match[1].trim();
      const startPos = match.index!;
      const endPos = index < matches.length - 1 ? matches[index + 1].index! : content.length;
      const sectionContent = content.slice(startPos, endPos);
      sections.set(sectionTitle, sectionContent);
    });
  });

  describe('Document Structure', () => {
    it('should be a non-empty markdown file', () => {
      expect(content).toBeTruthy();
      expect(content.length).toBeGreaterThan(0);
    });

    it('should have a clear title/heading', () => {
      expect(content).toMatch(/^#\s+/m);
    });

    it('should contain structured sections with headings', () => {
      const headings = content.match(/^#+\s+.+$/gm);
      expect(headings).toBeTruthy();
      expect(headings!.length).toBeGreaterThanOrEqual(8);
    });
  });

  describe('Required Main Sections', () => {
    it('should have Overview section', () => {
      const hasOverview = Array.from(sections.keys()).some(key => 
        key.includes('Overview') || key.includes('1.')
      );
      expect(hasOverview).toBe(true);
    });

    it('should have Publo Brand Context section', () => {
      const hasBrandContext = Array.from(sections.keys()).some(key => 
        key.includes('Brand Context') || key.includes('2.')
      );
      expect(hasBrandContext).toBe(true);
    });

    it('should have Mission Narrative section', () => {
      const hasMission = Array.from(sections.keys()).some(key => 
        key.includes('Mission Narrative') || key.includes('3.')
      );
      expect(hasMission).toBe(true);
    });

    it('should have Technical Requirements section', () => {
      const hasTechnical = Array.from(sections.keys()).some(key => 
        key.includes('Technical Requirements') || key.includes('4.')
      );
      expect(hasTechnical).toBe(true);
    });

    it('should have Required Pages section', () => {
      const hasPages = Array.from(sections.keys()).some(key => 
        key.includes('Required Pages') || key.includes('5.')
      );
      expect(hasPages).toBe(true);
    });

    it('should have Design Requirements section', () => {
      const hasDesign = Array.from(sections.keys()).some(key => 
        key.includes('Design Requirements') || key.includes('6.')
      );
      expect(hasDesign).toBe(true);
    });

    it('should have Output Format section', () => {
      const hasOutput = Array.from(sections.keys()).some(key => 
        key.includes('Output Format') || key.includes('7.')
      );
      expect(hasOutput).toBe(true);
    });

    it('should have Model Objective section', () => {
      const hasObjective = Array.from(sections.keys()).some(key => 
        key.includes('Model Objective') || key.includes('8.')
      );
      expect(hasObjective).toBe(true);
    });
  });

  describe('Brand Context Content', () => {
    it('should define what Publo is', () => {
      expect(content.toLowerCase()).toContain('what publo is');
      expect(content).toContain('AI-augmented book-authoring platform');
    });

    it('should list target users', () => {
      expect(content).toContain('aspiring authors');
      expect(content).toContain('experienced writers');
    });

    it('should describe key features', () => {
      expect(content).toContain('AI-guided outlining');
      expect(content).toContain('manuscript editing');
      expect(content).toContain('World-building tools');
    });
  });

  describe('Mission Narrative Content', () => {
    it('should include "Every Life Deserves Its Story" narrative', () => {
      expect(content).toContain('Every Life Deserves Its Story');
    });

    it('should discuss democratizing cultural heritage', () => {
      expect(content).toContain('Democratizing Cultural Heritage');
    });

    it('should address narrative inequality', () => {
      expect(content).toContain('Narrative Inequality');
    });

    it('should explain Publo\'s purpose', () => {
      expect(content).toContain('Publo\'s Purpose');
      expect(content).toContain('ghostwriter');
    });

    it('should have a clear call-to-action', () => {
      expect(content).toContain('Call-To-Action');
    });

    it('should mention the grandmother story metaphor', () => {
      expect(content).toContain('grandmother');
      expect(content).toMatch(/can't write|cannot write/i);
    });
  });

  describe('Technical Requirements', () => {
    it('should specify Next.js with App Router', () => {
      expect(content).toContain('Next.js');
      expect(content).toContain('App Router');
    });

    it('should specify Tailwind CSS', () => {
      expect(content).toContain('Tailwind CSS');
    });

    it('should require responsive design', () => {
      expect(content.toLowerCase()).toContain('responsive');
    });

    it('should require accessible design', () => {
      expect(content.toLowerCase()).toContain('accessible');
    });

    it('should specify required Next.js files', () => {
      expect(content).toContain('app/layout.tsx');
      expect(content).toContain('app/page.tsx');
      expect(content).toContain('/components/');
    });

    it('should mention Scandinavian minimalistic style', () => {
      expect(content.toLowerCase()).toContain('scandinavian');
      expect(content.toLowerCase()).toContain('minimalist');
    });
  });

  describe('Required Pages Specifications', () => {
    describe('Landing Page', () => {
      it('should specify hero section', () => {
        expect(content).toContain('Hero Section');
      });

      it('should include specific headline', () => {
        expect(content).toContain('Write better books with intelligent assistance');
      });

      it('should specify CTAs', () => {
        expect(content).toContain('Start Writing');
        expect(content).toContain('Explore Features');
      });

      it('should include key features section', () => {
        expect(content).toContain('Key Features Section');
      });

      it('should reference mission block', () => {
        expect(content).toContain('Mission Block');
      });
    });

    it('should define How It Works page', () => {
      expect(content).toContain('How It Works Page');
      expect(content).toContain('app/how-it-works/page.tsx');
    });

    it('should define Pricing page', () => {
      expect(content).toContain('Pricing Page');
      expect(content).toContain('app/pricing/page.tsx');
      expect(content).toContain('Free trial');
      expect(content).toContain('Creator tier');
      expect(content).toContain('Professional tier');
    });

    it('should define About page', () => {
      expect(content).toContain('About Page');
      expect(content).toContain('app/about/page.tsx');
    });

    it('should specify footer requirements', () => {
      expect(content).toContain('Footer');
      expect(content).toContain('Terms of Service');
      expect(content).toContain('Privacy Policy');
      expect(content).toContain('Contact');
      expect(content).toContain('Publo by AiAkaki');
    });
  });

  describe('Publo Features Coverage', () => {
    const requiredFeatures = [
      'AI-guided outlining',
      'Context-aware manuscript',
      'Editing and rewriting',
      'Character',
      'timeline',
      'world-building',
      'Chapter and revision',
      'Secure, private data',
      'EPUB',
      'PDF',
      'Markdown',
      'Word'
    ];

    requiredFeatures.forEach(feature => {
      it(`should mention ${feature}`, () => {
        expect(content).toContain(feature);
      });
    });
  });

  describe('Design Requirements', () => {
    it('should specify Scandinavian minimalism', () => {
      expect(content).toContain('Scandinavian minimalism');
    });

    it('should require soft neutral palette', () => {
      expect(content).toContain('neutral palette');
    });

    it('should emphasize typography', () => {
      expect(content.toLowerCase()).toContain('typography');
    });

    it('should require spacious layout', () => {
      expect(content.toLowerCase()).toContain('spacious');
    });

    it('should specify premium feel', () => {
      expect(content.toLowerCase()).toContain('premium');
    });

    it('should discourage unnecessary animations', () => {
      expect(content).toMatch(/no unnecessary animations/i);
    });
  });

  describe('Output Format Requirements', () => {
    it('should require all Next.js pages', () => {
      expect(content).toContain('All Next.js pages');
    });

    it('should require all components', () => {
      expect(content).toContain('All components');
    });

    it('should require full copywriting', () => {
      expect(content).toContain('Full copywriting');
    });

    it('should require folder structure', () => {
      expect(content).toContain('folder structure');
    });

    it('should prohibit filler code', () => {
      expect(content).toContain('No filler code');
    });

    it('should emphasize deployability', () => {
      expect(content.toLowerCase()).toMatch(/deploy/);
    });
  });

  describe('Model Objective', () => {
    it('should specify production-ready output', () => {
      expect(content).toContain('production-ready');
    });

    it('should require functional SaaS features', () => {
      expect(content).toContain('functional SaaS');
    });

    it('should require mission-driven narrative', () => {
      expect(content).toContain('mission-driven narrative');
    });

    it('should require clean UI', () => {
      expect(content).toContain('Clean UI');
    });

    it('should emphasize premium feel', () => {
      const modelObjective = content.substring(content.lastIndexOf('8. Model Objective'));
      expect(modelObjective.toLowerCase()).toContain('premium');
    });

    it('should mention cultural purpose', () => {
      expect(content).toContain('cultural purpose');
    });
  });

  describe('Consistency and Completeness', () => {
    it('should consistently reference AiAkaki portfolio narrative', () => {
      const aiAkakiReferences = (content.match(/AiAkaki/gi) || []).length;
      expect(aiAkakiReferences).toBeGreaterThanOrEqual(2);
    });

    it('should have consistent section numbering', () => {
      const numberedSections = content.match(/^\d+\.\s+/gm);
      expect(numberedSections).toBeTruthy();
      expect(numberedSections!.length).toBeGreaterThanOrEqual(8);
    });

    it('should not contain placeholder text like TODO or TBD', () => {
      expect(content.toUpperCase()).not.toContain('TODO');
      expect(content.toUpperCase()).not.toContain('TBD');
      expect(content.toUpperCase()).not.toContain('FIXME');
    });

    it('should be sufficiently detailed (minimum word count)', () => {
      const wordCount = content.split(/\s+/).length;
      expect(wordCount).toBeGreaterThan(1500);
    });
  });

  describe('Three-Step Process Consistency', () => {
    it('should describe three-step workflow', () => {
      expect(content).toContain('Three steps');
      expect(content).toContain('Create or import your manuscript');
      expect(content).toContain('Write with intelligent guidance');
      expect(content).toContain('Export and publish');
    });

    it('should reference three-step flow in How It Works', () => {
      const howItWorks = Array.from(sections.values()).find(section =>
        section.toLowerCase().includes('how it works')
      );
      expect(howItWorks).toBeTruthy();
      expect(howItWorks).toContain('Three-step');
    });
  });

  describe('Narrative Coherence', () => {
    it('should maintain focus on accessibility and democratization', () => {
      const democratizationMentions = (content.match(/democrati[zs]/gi) || []).length;
      const accessMentions = (content.match(/access(ible)?/gi) || []).length;
      expect(democratizationMentions + accessMentions).toBeGreaterThanOrEqual(5);
    });

    it('should emphasize preserving voice and authenticity', () => {
      expect(content).toMatch(/voice/i);
      expect(content).toMatch(/authentic/i);
    });

    it('should address the barrier of writing skills', () => {
      expect(content.toLowerCase()).toContain('writing skill');
      expect(content.toLowerCase()).toMatch(/barrier|bottleneck/);
    });
  });

  describe('Export Formats', () => {
    const exportFormats = ['EPUB', 'PDF', 'Markdown', 'Word'];
    
    exportFormats.forEach(format => {
      it(`should mention ${format} export`, () => {
        expect(content).toContain(format);
      });
    });

    it('should list all export formats together at least once', () => {
      const exportsLine = content.match(/EPUB.*PDF.*Markdown.*Word|Word.*Markdown.*PDF.*EPUB/);
      expect(exportsLine).toBeTruthy();
    });
  });
});
