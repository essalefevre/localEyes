import * as Icons from 'lucide-react';

export default function App() {
  return (
    <div id="showcase-root" className="min-h-screen bg-[#FAF9F6] text-[#1E2129] font-sans antialiased selection:bg-teal-100 selection:text-teal-900 pb-20">
      
      {/* Decorative Blueprint Grid Overlay */}
      <div className="absolute inset-x-0 top-0 h-[800px] pointer-events-none opacity-[0.02] select-none"
           style={{
             backgroundImage: `radial-gradient(#1E2129 1.5px, transparent 1.5px)`,
             backgroundSize: '24px 24px',
             zIndex: 0
           }} 
      />

      {/* Hero Header Space */}
      <header className="relative max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-8 border-b border-[#E1DEC9]/40 z-10">
        <div className="flex flex-col gap-6 mb-4">
          
          <div className="space-y-4">
            {/* Elegant Vector Logo */}
            <div className="flex items-center gap-3">
              <div 
                className="w-11 h-11 rounded-xl bg-teal-950/5 border border-teal-950/10 flex items-center justify-center p-2 text-teal-800 shadow-sm"
              >
                <Icons.Eye size={22} className="stroke-[1.75]" />
              </div>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 font-display">
                Project Showcase
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-[#161B21]">
                localEyes
              </h1>
              <p className="text-xs md:text-sm text-slate-500 mt-2 font-medium">
                Created by <span className="font-semibold text-slate-800">Essa LeFevre</span>, <span className="font-semibold text-slate-800">Mahima Uliyar</span>, <span className="font-semibold text-slate-800">Jasmine Zhang</span>, <span className="font-semibold text-slate-800">Theresa Tran</span>, and <span className="font-semibold text-slate-800">Caitlyn Wadjaja</span>
              </p>
            </div>
            
            {/* Catchphrase Editable Placeholder */}
            <div className="pt-2 max-w-2xl border-l-2 border-teal-600/40 pl-4 group">
              <p className="text-lg text-slate-600 italic leading-relaxed">
                "Insert your short, creative, and marketable catchphrase or key product concept tagline here — double-click to edit this in your source code."
              </p>
              <span className="text-[10px] font-bold tracking-wider text-teal-600/60 uppercase mt-1 block">
                Catchphrase &amp; Slogan Placeholder
              </span>
            </div>
          </div>

        </div>
      </header>

      {/* Main Grid View */}
      <main className="relative max-w-5xl mx-auto px-6 py-12 md:py-16 space-y-20 md:space-y-32 z-10">

        {/* 2. PROBLEM & SOLUTION STATEMENT SECTION */}
        <section id="needs-designs-section" className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          
          {/* PROBLEM STATEMENT BOX */}
          <div className="bg-white border border-[#E9E5DE]/80 rounded-2xl p-8 relative flex flex-col justify-between shadow-sm group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-teal-700 uppercase">
                  Statement A
                </span>
                <span className="p-1.5 rounded-lg bg-red-50 text-red-600 border border-red-100">
                  <Icons.AlertTriangle size={15} />
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-display font-semibold tracking-tight text-slate-900">
                  Problem Statement
                </h3>
                <p className="text-xs text-slate-400">
                  A concise analysis of user research findings and market gaps.
                </p>
              </div>

              {/* Blank Placeholder Core Body */}
              <div className="border border-dashed border-[#DECEBE] bg-[#F7F3EB]/30 rounded-xl p-5 text-center min-h-[160px] flex flex-col justify-center items-center">
                <Icons.Edit3 size={20} className="text-slate-400 mb-2 opacity-60" />
                <p className="text-xs font-semibold text-slate-800 mb-0.5">Placeholder: Define User Need</p>
                <p className="text-[11px] text-slate-400 max-w-[200px] leading-relaxed">
                  Describe what your target demographic struggles with and what user research identified.
                </p>
              </div>

              {/* Sub-bullets for process notes */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Research Coordinates</span>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-teal-600/30 w-1/3" />
                </div>
                <p className="text-[10px] italic text-slate-450 leading-relaxed">
                  (You can paste specific metrics or qualitative descriptors here inside App.tsx later.)
                </p>
              </div>
            </div>
          </div>

          {/* SOLUTION STATEMENT BOX */}
          <div className="bg-white border border-[#E9E5DE]/80 rounded-2xl p-8 relative flex flex-col justify-between shadow-sm group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-widest text-[#C96F53] uppercase">
                  Statement B
                </span>
                <span className="p-1.5 rounded-lg bg-teal-50 text-teal-600 border border-teal-100">
                  <Icons.CheckCircle size={15} />
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-display font-semibold tracking-tight text-slate-900">
                  Solution Statement
                </h3>
                <p className="text-xs text-slate-400">
                  Your creative design intervention, proposed features, and user value-add.
                </p>
              </div>

              {/* Blank Placeholder Core Body */}
              <div className="border border-dashed border-[#DECEBE] bg-[#F7F3EB]/30 rounded-xl p-5 text-center min-h-[160px] flex flex-col justify-center items-center">
                <Icons.Target size={20} className="text-[#C96F53] mb-2 opacity-65" />
                <p className="text-xs font-semibold text-slate-800 mb-0.5">Placeholder: Define Intervention</p>
                <p className="text-[11px] text-slate-400 max-w-[200px] leading-relaxed">
                  Pitch components and traits setting your solution apart from traditional answers.
                </p>
              </div>

              {/* Pitch Quote space */}
              <div className="border-t border-slate-100 pt-4 text-center">
                <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                  Value Pitch Statement
                </span>
                <p className="text-xs text-slate-500 italic">
                  "Insert dynamic visionary quote pitching how this improves human lives."
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* 3. CONCEPT VIDEO PLACEHOLDER */}
        <section id="concept-video-section" className="space-y-6">
          <div className="text-center space-y-1.5 max-w-xl mx-auto">
            <span className="text-[10px] font-bold tracking-widest text-[#C96F53] uppercase block">
              Concept Video
            </span>
            <h2 className="text-2xl font-display font-bold tracking-tight text-[#161B21]">
              Product Narrative &amp; Walkthrough
            </h2>
            <p className="text-xs text-slate-500">
              A blank video placeholder framed for your storyboard presentation, demo filming, or physical roleplays.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden w-full aspect-video rounded-3xl border border-dashed border-[#CDCEBE] bg-[#F5F2EC]/40 flex flex-col items-center justify-center p-6 text-center select-none shadow-sm hover:bg-[#F5F2EC]/65 transition duration-300 group">
              
              {/* Fake player frame components represent a premium UI draft */}
              <div className="w-16 h-16 rounded-full bg-[#161B21] border-2 border-[#E1DEC9] flex items-center justify-center text-white shadow-md hover:scale-105 duration-300 mb-4 cursor-default">
                <Icons.Play size={20} className="ml-0.5 fill-current" />
              </div>

              <div className="space-y-1.5 max-w-sm">
                <h4 className="font-bold text-sm text-[#1E2129]">
                  Embedded Video Placeholder Frame
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  When you have finalized your Youtube, Vimeo, or screen-recording concept video, insert its <code className="bg-slate-100 p-0.5 px-1 rounded text-red-600 font-mono text-[10px]">&lt;iframe&gt;</code> element here to embed.
                </p>
              </div>

              {/* Status footer for video indicator */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase font-bold tracking-widest text-slate-400">
                <span>0:00 / VIDEO DEMO</span>
                <span>localEyes Concept Pitch</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE DESIGN PROCESS STEPPING */}
        <section id="process-section" className="space-y-8">
          <div className="text-center space-y-1.5 max-w-xl mx-auto mb-6">
            <span className="text-[10px] font-bold tracking-widest text-teal-700 uppercase block">
              Our Journey
            </span>
            <h2 className="text-2xl font-display font-bold tracking-tight text-[#161B21]">
              Peek Into Our Process
            </h2>
            <p className="text-xs text-slate-500">
              A sequence outlining the creative ideation, contextual inquiry logging, physical paper prototypes, or design pivots.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Stage Indicator Step 1 */}
            <div className="bg-white border border-[#E9E5DE]/85 rounded-2xl p-6 space-y-4 shadow-sm relative group">
              <span className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-bold text-xs text-teal-800">
                01
              </span>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-[#1E2129] tracking-tight">
                  Phase 1: Research &amp; Inquiry
                </h4>
                <span className="inline-block bg-slate-100 text-slate-500 text-[9px] font-mono uppercase px-2 py-0.5 rounded">
                  Inquiry Stages
                </span>
              </div>
              <div className="border border-dashed border-[#ECE0CE] bg-[#F7F3EB]/25 rounded-xl p-4 text-center min-h-[90px] flex items-center justify-center">
                <p className="text-xs text-slate-400 leading-normal italic">
                  "Insert snapshots of intermediate user findings, sensor metrics logs, pain matrices, or paper sketches here."
                </p>
              </div>
            </div>

            {/* Stage Indicator Step 2 */}
            <div className="bg-white border border-[#E9E5DE]/85 rounded-2xl p-6 space-y-4 shadow-sm relative group">
              <span className="w-8 h-8 rounded-full bg-amber-50 border border-amber-100 flex items-center justify-center font-bold text-xs text-amber-800">
                02
              </span>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-[#1E2129] tracking-tight">
                  Phase 2: Paper Prototypes
                </h4>
                <span className="inline-block bg-slate-100 text-slate-500 text-[9px] font-mono uppercase px-2 py-0.5 rounded">
                  Low-Fi Mockups
                </span>
              </div>
              <div className="border border-dashed border-[#ECE0CE] bg-[#F7F3EB]/25 rounded-xl p-4 text-center min-h-[90px] flex items-center justify-center">
                <p className="text-xs text-slate-400 leading-normal italic">
                  "Insert snapshots of physical foam assemblies, co-design physical storyboard templates, or digital wireframes."
                </p>
              </div>
            </div>

            {/* Stage Indicator Step 3 */}
            <div className="bg-white border border-[#E9E5DE]/85 rounded-2xl p-6 space-y-4 shadow-sm relative group">
              <span className="w-8 h-8 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center font-bold text-xs text-purple-800">
                03
              </span>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-[#1E2129] tracking-tight">
                  Phase 3: Refinement &amp; Pivots
                </h4>
                <span className="inline-block bg-slate-100 text-slate-500 text-[9px] font-mono uppercase px-2 py-0.5 rounded">
                  User Evaluation
                </span>
              </div>
              <div className="border border-dashed border-[#ECE0CE] bg-[#F7F3EB]/25 rounded-xl p-4 text-center min-h-[90px] flex items-center justify-center">
                <p className="text-xs text-slate-400 leading-normal italic">
                  "Document user testing findings, critical feedback loops, cognitive walkthrough adjustments, and final pivots here."
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 5. POLISHED DEMO DESIGN SHOWROOM */}
        <section id="showroom-section" className="space-y-8">
          <div className="text-center space-y-1.5 max-w-xl mx-auto mb-6">
            <span className="text-[10px] font-bold tracking-widest text-[#C96F53] uppercase block">
              High Fidelity Design
            </span>
            <h2 className="text-2xl font-display font-bold tracking-tight text-[#161B21]">
              Polished Demo of the Solution
            </h2>
            <p className="text-xs text-slate-500">
              The high-fidelity showroom. Populate this with interactive screen listings, Figma recordings, or static system views.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Screen Mockup Box 1 */}
            <div className="bg-white border border-[#E9E5DE] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group">
              <div className="aspect-[4/5] bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-slate-500 border-b border-slate-150 relative min-h-[300px]">
                {/* Visual Camera Lens Layout Grid */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                     style={{
                       backgroundImage: `radial-gradient(#FFF 1px, transparent 1px)`,
                       backgroundSize: '16px 16px'
                     }} 
                />
                <Icons.Layout size={32} className="text-[#DECEBE] mb-2 stroke-[1.25]" />
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Interface Screen 01</span>
                <p className="text-[10px] text-slate-500 max-w-[170px] mt-1 leading-normal">
                  Drop high-fidelity Figma exporter links or PNG screenshots here.
                </p>
              </div>
              <div className="p-5">
                <span className="text-[9px] uppercase font-bold tracking-wider text-teal-600 block mb-1">
                  Active Screen 1
                </span>
                <h4 className="font-bold text-sm text-[#1E2129]">
                  Main Dashboard Overview
                </h4>
                <p className="text-xs text-slate-405 leading-relaxed mt-1">
                  Space to explain the specific layout interactions, widgets, coordinates, and user utilities.
                </p>
              </div>
            </div>

            {/* Screen Mockup Box 2 */}
            <div className="bg-white border border-[#E9E5DE] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group">
              <div className="aspect-[4/5] bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-slate-500 border-b border-slate-150 relative min-h-[300px]">
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                     style={{
                       backgroundImage: `radial-gradient(#FFF 1px, transparent 1px)`,
                       backgroundSize: '16px 16px'
                     }} 
                />
                <Icons.MapPin size={32} className="text-[#DECEBE] mb-2 stroke-[1.25]" />
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Interface Screen 02</span>
                <p className="text-[10px] text-slate-500 max-w-[170px] mt-1 leading-normal">
                  Drop high-fidelity Figma exporter links or PNG screenshots here.
                </p>
              </div>
              <div className="p-5">
                <span className="text-[9px] uppercase font-bold tracking-wider text-amber-600 block mb-1">
                  Active Screen 2
                </span>
                <h4 className="font-bold text-sm text-[#1E2129]">
                  Search &amp; Map Coordinates
                </h4>
                <p className="text-xs text-slate-405 leading-relaxed mt-1">
                  Space to explain the specific layout interactions, widgets, coordinates, and user utilities.
                </p>
              </div>
            </div>

            {/* Screen Mockup Box 3 */}
            <div className="bg-white border border-[#E9E5DE] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group">
              <div className="aspect-[4/5] bg-slate-900 flex flex-col items-center justify-center p-6 text-center text-slate-500 border-b border-slate-150 relative min-h-[300px]">
                <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
                     style={{
                       backgroundImage: `radial-gradient(#FFF 1px, transparent 1px)`,
                       backgroundSize: '16px 16px'
                     }} 
                />
                <Icons.Sliders size={32} className="text-[#DECEBE] mb-2 stroke-[1.25]" />
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Interface Screen 03</span>
                <p className="text-[10px] text-slate-500 max-w-[170px] mt-1 leading-normal">
                  Drop high-fidelity Figma exporter links or PNG screenshots here.
                </p>
              </div>
              <div className="p-5">
                <span className="text-[9px] uppercase font-bold tracking-wider text-rose-600 block mb-1">
                  Active Screen 3
                </span>
                <h4 className="font-bold text-sm text-[#1E2129]">
                  Metric Adjustments &amp; Settings
                </h4>
                <p className="text-xs text-slate-405 leading-relaxed mt-1">
                  Space to explain the specific layout interactions, widgets, coordinates, and user utilities.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Exquisite minimal Academic Footer */}
      <footer className="border-t border-[#E1DEC9]/45 mt-24 py-12 text-center text-xs opacity-65 text-slate-450 max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-left space-y-1">
          <p className="font-bold text-[#1E2129] font-display text-sm">localEyes Portfolio</p>
          <p>Created as a clean static presentation showcase.</p>
        </div>
        <p>&copy; {new Date().getFullYear()} localEyes Team. All Academic Rights Reserved.</p>
      </footer>

    </div>
  );
}
