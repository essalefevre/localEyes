import * as Icons from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  // List of posts in the main feed
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Sarah Chen",
      badge: "Friend",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      city: "Tokyo",
      country: "Japan",
      daysAgo: "2 days ago",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=650&q=80",
      locationName: "Tsukiji Outer Market",
      rating: 5,
      category: "Restaurant",
      priceRange: "$$",
      crowdLevel: "Busy",
      bestTime: "Early morning (6-8am)",
      review: "Incredible fresh sushi breakfast experience! The tuna was so fresh it melted in my mouth. Arrive...",
      likeCount: 84,
      isLiked: false,
      isSaved: false,
      isLocalRec: true,
      isHiddenGem: false,
      isNotSponsored: true
    },
    {
      id: 2,
      user: "Kenji Sato",
      badge: "Local",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      city: "Tokyo",
      country: "Japan",
      daysAgo: "5 hours ago",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=650&q=80",
      locationName: "Lion Cafe & Record Bar",
      rating: 5,
      category: "Cafe",
      priceRange: "$",
      crowdLevel: "Quiet",
      bestTime: "Late afternoon (4-6pm)",
      review: "A hidden classic where talking is forbidden. Hand-poured drip coffee paired with giant vintage wooden horn speakers blasting vinyl records since 1926.",
      likeCount: 142,
      isLiked: true,
      isSaved: true,
      isLocalRec: true,
      isHiddenGem: true,
      isNotSponsored: true
    }
  ]);

  // Create Post Form States for Simulator
  const [createPostStep, setCreatePostStep] = useState(1);
  const [postLocation, setPostLocation] = useState('Tsukiji Outer Market');
  const [postCity, setPostCity] = useState('Tokyo');
  const [postCountry, setPostCountry] = useState('Japan');
  const [postRating, setPostRating] = useState(5);
  const [postPriceRange, setPostPriceRange] = useState('$$');
  const [postCategory, setPostCategory] = useState('Restaurant');
  const [postCrowdLevel, setPostCrowdLevel] = useState('Moderate');
  const [postBestTime, setPostBestTime] = useState('Early morning (6-8am)');
  const [postReview, setPostReview] = useState('Incredible fresh sushi breakfast experience! The tuna was so fresh it melted in my mouth. Arrive early!');
  const [postInsiderTip, setPostInsiderTip] = useState('Go to the second alley to find the best uni bowl.');
  const [isLocalRecBadge, setIsLocalRecBadge] = useState(true);
  const [isHiddenGemBadge, setIsHiddenGemBadge] = useState(false);
  const [postVisibility, setPostVisibility] = useState('Public');
  const [uploadedImageIndex, setUploadedImageIndex] = useState(0); // Cycle between a few pretty preset options
  const [showPublishSuccess, setShowPublishSuccess] = useState(false);
  
  // Itinerary Simulator States
  const [itineraryTab, setItineraryTab] = useState<'My Trips' | 'Shared With Me' | 'Saved'>('My Trips');
  const [showCreateItinerary, setShowCreateItinerary] = useState(false);
  const [showItineraryToast, setShowItineraryToast] = useState('');
  
  const [itineraries, setItineraries] = useState({
    'My Trips': [
      {
        id: 'tokyo-1',
        title: "Tokyo",
        location: "Tokyo, Japan",
        date: "Jun 14 - Jun 19, 2026",
        duration: "1 days",
        author: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=650&q=80",
        isShared: false
      }
    ],
    'Shared With Me': [
      {
        id: 'greece-1',
        title: "Greek Island Hopping",
        location: "Greece",
        date: "Jul 9 - Jul 16, 2026",
        duration: "1 days",
        author: "Marco Rossi",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=650&q=80",
        isShared: true
      }
    ],
    'Saved': [
      {
        id: 'paris-1',
        title: "Paris Weekend",
        location: "Paris, France",
        date: "Aug 22 - Aug 25, 2026",
        duration: "3 days",
        author: "Emma Watson",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=650&q=80",
        isShared: false
      }
    ]
  });

  // Create Itinerary Form States
  const [newItineraryTitle, setNewItineraryTitle] = useState('Kyoto Explorer');
  const [newItineraryLocation, setNewItineraryLocation] = useState('Kyoto, Japan');
  const [newItineraryDates, setNewItineraryDates] = useState('Oct 12 - Oct 18, 2026');
  const [newItineraryDuration, setNewItineraryDuration] = useState('6 days');
  const [newItineraryImageIndex, setNewItineraryImageIndex] = useState(0);

  const itineraryImageOptions = [
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=650&q=80", // Kyoto/Temple
    "https://images.unsplash.com/photo-1542013936693-8848e574047e?auto=format&fit=crop&w=650&q=80", // Ramen Bar
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=650&q=80", // Record bar cozy
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=650&q=80"  // Cyberpunk Street
  ];

  // Quick image options for simulated posts
  const mockImageOptions = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=650&q=80", // Cafe/market
    "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=650&q=80", // Tokyo Neon Alley
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=650&q=80", // Temple
    "https://images.unsplash.com/photo-1542013936693-8848e574047e?auto=format&fit=crop&w=650&q=80"  // Ramen bar
  ];

  // Explore Screen States
  const [exploreActiveTab, setExploreActiveTab] = useState<'All' | 'Trending' | 'Hidden Gems' | 'Foodie'>('All');
  const [exploreSearch, setExploreSearch] = useState('');
  const [selectedExplorePlace, setSelectedExplorePlace] = useState<any>(null);
  const [friendsOnlyFilter, setFriendsOnlyFilter] = useState(false);
  const [localsFilter, setLocalsFilter] = useState(false);

  const explorePlaces = [
    {
      id: 'exp-1',
      title: 'Hidden Lantern District',
      location: 'Kyoto, Japan',
      category: 'Romantic Walks',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
      description: 'A stone-paved pedestrian path lined with traditional wooden machiya townhouses, glowing red lanterns, and authentic tea salons.',
      author: 'Emi Sato',
      rating: 4.9,
      tags: ['Traditional', 'Lanterns', 'Quiet'],
      type: 'Hidden Gems'
    },
    {
      id: 'exp-2',
      title: 'Monmartre Vintage Stalls',
      location: 'Paris, France',
      category: 'Shopping',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80',
      description: 'Little-known flea market stalls specializing in mid-century French vinyl records, pocket watches, and vintage film cameras.',
      author: 'Lucas Dubois',
      rating: 4.8,
      tags: ['Vintage', 'Records', 'Art'],
      type: 'Trending'
    },
    {
      id: 'exp-3',
      title: 'Seaside Cliff Tavernas',
      location: 'Milos, Greece',
      category: 'Foodie Eats',
      image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80',
      description: 'A locally owned family fishing shack serving wood-fired octopus, salted Greek olives, and fresh bread on a secret deck overlooking the Aegean.',
      author: 'Marco Rossi',
      rating: 5.0,
      tags: ['Seafood', 'Ocean View', 'Authentic'],
      type: 'Foodie'
    },
    {
      id: 'exp-4',
      title: 'Omoide Yokocho Records',
      location: 'Tokyo, Japan',
      category: 'Foodie Eats',
      image: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
      description: 'Tiny counter bars serving yakitori and cold draft beers in a historical retro alleyway dating back to WWII.',
      author: 'Kenji Sato',
      rating: 4.7,
      tags: ['Yakitori', 'Alleyway', 'Nightlife'],
      type: 'Trending'
    }
  ];

  // Profile Screen States
  const [profileActiveTab, setProfileActiveTab] = useState<'Posts' | 'Saved' | 'Stats'>('Posts');
  const [profileBio, setProfileBio] = useState('Passionate traveler | Food lover | Hidden gem hunter\nSharing authentic travel experiences from around the world');
  const [isEditingBio, setIsEditingBio] = useState(false);
  const [followersCount, setFollowersCount] = useState(156);
  const [profileToast, setProfileToast] = useState('');
  const [isStoryboardOpen, setIsStoryboardOpen] = useState(false);
  const [storyboardActiveTab, setStoryboardActiveTab] = useState<number>(1);
  const [useOriginalPhoto, setUseOriginalPhoto] = useState(true);
  const [storyboardPhotoError, setStoryboardPhotoError] = useState(false);
  const [storyboardPhotoPathIndex, setStoryboardPhotoPathIndex] = useState(0);
  const storyboardPhotoPaths = ["/storyboard_photo.jpg.png", "/storyboard_photo.jpg"];

  // Selected Usability Incident for Phase 2 vs 3 Comparative Display
  const [selectedIncident, setSelectedIncident] = useState(0);
  const [labPhase, setLabPhase] = useState<'both'|'lofi'|'hifi'>('both');
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

            {/* Logo from image */}
            <div className="flex items-center gap-3">
              <img
                src="/localeyes-logo.png"
                alt="localEyes logo"
                className="w-20 h-20 object-contain"
              />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 font-display">
                Project Showcase
              </span>
            </div>

            <div>
              <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-[#161B21]">
                localEyes
              </h1>
              <p className="text-xs md:text-sm text-slate-500 mt-2 font-medium">
                Created by <span className="font-semibold text-slate-800">Essa LeFevre</span>, <span className="font-semibold text-slate-800">Mahima Uliyar</span>, <span className="font-semibold text-slate-800">Jasmine Zhang</span>, <span className="font-semibold text-slate-800">Theresa Tran</span>, and <span className="font-semibold text-slate-800">Caitlyn Widjaja</span>
              </p>
            </div>

            {/* Tagline from logo */}
            <div className="pt-2 max-w-2xl border-l-2 border-teal-600/40 pl-4">
              <p className="text-lg text-slate-600 italic leading-relaxed">
                Share experiences. Discover more.
              </p>
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
                <span className="p-1.5 rounded-lg bg-red-50 text-red-600 border border-red-100">
                  <Icons.AlertTriangle size={15} />
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-display font-semibold tracking-tight text-slate-900">
                  Problem Statement
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  "Too much travel information, not enough relevant insight.",
                  "Difficult to know which recommendations actually fit your needs.",
                  "Hidden local experiences are buried under popular, mainstream content.",
                  "Most travel information online is sponsored or commercially biased.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 bg-red-50/50 border border-red-100/60 rounded-xl p-3">
                    <span className="text-red-400 mt-0.5 shrink-0 text-base leading-none">▪</span>
                    <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-4">
                <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                  Core User Pain
                </span>
                <p className="text-xs text-slate-500 italic">
                  "Travelers are overwhelmed with noise and starved of authentic, trustworthy guidance."
                </p>
              </div>
            </div>
          </div>

          {/* SOLUTION STATEMENT BOX */}
          <div className="bg-white border border-[#E9E5DE]/80 rounded-2xl p-8 relative flex flex-col justify-between shadow-sm group">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="p-1.5 rounded-lg bg-teal-50 text-teal-600 border border-teal-100">
                  <Icons.CheckCircle size={15} />
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-display font-semibold tracking-tight text-slate-900">
                  Solution Statement
                </h3>
              </div>

              <div className="space-y-3">
                {[
                  "A social travel platform where locals and travelers share trusted, first-hand recommendations.",
                  "Helps users uncover authentic experiences and hidden gems beyond the tourist trail.",
                  "Personalized discovery powered by your social network — friends, locals, and fellow travelers you trust.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 bg-teal-50/50 border border-teal-100/60 rounded-xl p-3">
                    <span className="text-teal-500 mt-0.5 shrink-0 text-base leading-none">▪</span>
                    <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-100 pt-4 text-center">
                <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                  Value Pitch Statement
                </span>
                <p className="text-xs text-slate-500 italic">
                  "As more people travel than ever before, localEyes connects them to the people and places that make every journey genuinely unforgettable."
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
              Product Narrative
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden w-full aspect-video rounded-3xl border border-[#CDCEBE] bg-[#161B21] shadow-sm">
              <video
                className="w-full h-full object-cover rounded-3xl"
                controls
                loop
                playsInline
              >
                <source src="/hci_2g.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
              <div className="space-y-3">
                {/* Visual Thumbnail of Storyboard Section */}
                <div 
                  onClick={() => { setIsStoryboardOpen(true); setStoryboardActiveTab(1); }}
                  className="border border-[#ECE0CE] bg-[#F7F3EB]/20 rounded-xl p-3 text-left hover:bg-[#FAF8F5] transition-all cursor-pointer group active:scale-[0.99] border-dashed"
                >
                  <div className="flex gap-2.5 items-center mb-2">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center border border-teal-100 shrink-0">
                      <Icons.Compass size={14} />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-[11px] text-zinc-900 leading-none">Stage 1 Storyboard Study</h5>
                      <span className="text-[8px] font-bold text-teal-650 tracking-wider font-mono uppercase mt-0.5 block">
                        4 Panels Connected
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-650 leading-normal line-clamp-2">
                    Visualizing the initial trip planning friction, TikTok clutter, peer video recommendation circles, and forgotten favorite spots.
                  </p>
                  
                  {/* Miniature abstract representation of the cards */}
                  <div className="grid grid-cols-4 gap-1 mt-2.5 pt-2 border-t border-stone-100">
                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="bg-[#FAF8F5] border border-stone-200 rounded p-1 text-[8.5px] text-center font-extrabold text-stone-400 group-hover:border-teal-300 group-hover:text-teal-700 transition-all">
                        #{num}
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => setIsStoryboardOpen(true)}
                  className="w-full py-2 bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-[10.5px] rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-sm active:scale-[0.98] cursor-pointer"
                >
                  <Icons.Eye size={12} />
                  <span>View Storyboard Process</span>
                </button>

                {/* Actual Paper Storyboard Photo Display */}
                <div className="mt-4 pt-4 border-t border-stone-200/60 text-left space-y-2">
                  <span className="text-[10px] font-bold tracking-widest text-[#8A7052] uppercase block">
                    Physical Sketch Photo
                  </span>
                  <div className="bg-white border border-stone-200 rounded-xl p-2.5 relative group overflow-hidden shadow-xs hover:border-teal-400/60 transition-all">
                    {/* Notebook grid effect overlay */}
                    <div className="absolute inset-0 bg-[#FDFCF7] opacity-[0.93] select-none pointer-events-none" style={{
                      backgroundImage: 'linear-gradient(rgba(186, 218, 245, 0.45) 1.5px, transparent 1.5px)',
                      backgroundSize: '100% 16px',
                      backgroundPosition: '0 4px'
                    }}>
                      <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-red-200/90" />
                    </div>

                    <div className="relative z-10 space-y-2">
                      <div className="flex justify-between items-center text-[9px] font-mono text-stone-400 select-none">
                        <span>Original Notebook Photo</span>
                        <span className="text-stone-300">#storyboard-raw</span>
                      </div>

                      {/* Display original user file if exists or user uploads it, else display clean illustration of notebook */}
                      {!storyboardPhotoError ? (
                        <div className="relative group/image">
                          <img 
                            src={storyboardPhotoPaths[storyboardPhotoPathIndex]}
                            alt="Original Spiral Storyboard Photo"
                            className="w-full h-auto rounded-lg border border-stone-200/50 object-cover shadow-sm bg-white"
                            onError={() => {
                              if (storyboardPhotoPathIndex < storyboardPhotoPaths.length - 1) {
                                setStoryboardPhotoPathIndex(storyboardPhotoPathIndex + 1);
                              } else {
                                setStoryboardPhotoError(true);
                              }
                            }}
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute bottom-2 right-2 bg-stone-900/75 backdrop-blur-xs text-white text-[8px] px-2 py-0.5 rounded font-mono select-none opacity-0 group-hover/image:opacity-100 transition-all">
                            /public{storyboardPhotoPaths[storyboardPhotoPathIndex]}
                          </div>
                        </div>
                      ) : (
                        <div className="border border-dashed border-stone-250 rounded-lg p-2.5 bg-white/95 backdrop-blur-sm space-y-2 text-left animate-fade-in">
                          <div className="flex gap-2 items-center text-[9px] text-[#8A7052] font-black uppercase mb-1 bg-[#FAF6F0] px-2 py-1 rounded">
                            <Icons.FileImage size={11} className="text-[#8A7052]" />
                            <span>Double-Lined Spiral Sketch</span>
                          </div>
                          <p className="text-[9.5px] text-stone-500 leading-normal mb-1.5">
                            Original physical storyboard sketch is wired! Drop your sketch file in <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-stone-750 text-[8.5px]">/public/storyboard_photo.jpg</code> to view the raw camera snap.
                          </p>
                          
                          {/* Mini Realistic Drawing resembling their actual uploaded sketch */}
                          <div className="border border-[#ECE0CE] bg-[#FAF8F5]/50 p-2 rounded-md space-y-2">
                            <div className="flex justify-between items-center pb-1.5 border-b border-stone-100">
                              <span className="text-[8px] font-bold text-stone-400 font-mono">PENCIL CELL LOGS</span>
                              <span className="text-[8px] font-bold px-1 rounded bg-teal-50 text-teal-700 font-mono">4 PANELS DETECTED</span>
                            </div>
                            <div className="grid grid-cols-2 gap-1 px-0.5">
                              <div className="bg-white/80 p-1 border border-stone-150 rounded text-[7.5px] leading-tight space-y-0.5 text-stone-600">
                                <span className="font-extrabold text-[#8A7052] text-[6.5px] block font-mono">CELL 1: FILTER BUBBLE</span>
                                <p className="line-clamp-2">"Mahima searches attractions in Japan, finds only sponsored ads."</p>
                              </div>
                              <div className="bg-white/80 p-1 border border-stone-150 rounded text-[7.5px] leading-tight space-y-0.5 text-stone-600">
                                <span className="font-extrabold text-[#8A7052] text-[6.5px] block font-mono">CELL 2: TOOL OVERLOAD</span>
                                <p className="line-clamp-2">"TikTok overwhelming! Calls Theresa who finds current tools exhausting."</p>
                              </div>
                              <div className="bg-white/80 p-1 border border-stone-150 rounded text-[7.5px] leading-tight space-y-0.5 text-stone-600">
                                <span className="font-extrabold text-[#8A7052] text-[6.5px] block font-mono">CELL 3: PEER INQUIRY</span>
                                <p className="line-clamp-2">"Adds classmate Essa to the call. Ask for local recommendations."</p>
                              </div>
                              <div className="bg-white/80 p-1 border border-stone-150 rounded text-[7.5px] leading-tight space-y-0.5 text-stone-600">
                                <span className="font-extrabold text-[#8A7052] text-[6.5px] block font-mono">CELL 4: SHARING LEAK</span>
                                <p className="line-clamp-2">"Essa forgot local gems because we lost them in transient text conversations."</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage Indicator Step 2 */}
            <div className="bg-white border border-[#E9E5DE]/85 rounded-2xl p-6 space-y-4 shadow-sm relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="w-8 h-8 rounded-full bg-amber-50 border border-amber-105 flex items-center justify-center font-bold text-xs text-amber-850 shadow-2xs">
                    02
                  </span>
                  <span className="text-[9px] font-bold text-amber-700 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full uppercase font-mono tracking-wider">
                    4 Lo-Fi Sketched Cards
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-[#1E2129] tracking-tight">
                    Phase 2: Paper Prototypes
                  </h4>
                  <span className="inline-block bg-amber-100/50 text-[#8A7052] text-[9px] font-mono uppercase px-2 py-0.5 rounded font-black">
                    Physical Drawings (Select one)
                  </span>
                </div>
                
                {/* Micro Tabs Selector for the 4 Paper Incidents */}
                <div className="grid grid-cols-4 gap-1 p-1 bg-stone-50 rounded-xl border border-stone-200/60 shadow-2xs">
                  {[
                    { label: "Nav", icon: Icons.Compass },
                    { label: "Search", icon: Icons.Search },
                    { label: "Add", icon: Icons.Plus },
                    { label: "Delete", icon: Icons.Trash2 },
                  ].map((x, idx) => {
                    const ActiveIcon = x.icon;
                    return (
                      <button
                        key={idx}
                        onClick={() => setSelectedIncident(idx)}
                        className={`py-1.5 px-1 rounded-lg text-[9px] font-black flex flex-col items-center gap-0.5 transition-all cursor-pointer ${
                          selectedIncident === idx
                            ? "bg-amber-800 text-white shadow-2xs"
                            : "text-stone-450 hover:text-stone-800 hover:bg-stone-100"
                        }`}
                      >
                        <ActiveIcon size={11} className={selectedIncident === idx ? "text-[#FFDFB3]" : "text-stone-400"} />
                        <span className="text-[8px] tracking-tight uppercase leading-none">{x.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Simulated Paper Sheets Notebook Canvas */}
                <div className="relative border border-stone-250/70 rounded-xl overflow-hidden bg-[#FAFAF6] p-4.5 select-none min-h-[225px] flex flex-col justify-between shadow-xs">
                  {/* Paper grid background effect */}
                  <div className="absolute inset-0 bg-[#FDFCFB] opacity-[0.93]" style={{
                    backgroundImage: 'linear-gradient(rgba(186, 218, 245, 0.45) 1.5px, transparent 1.5px)',
                    backgroundSize: '100% 16px',
                    backgroundPosition: '0 4px'
                  }}>
                    <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-red-200/95" />
                  </div>

                  <div className="relative z-10 space-y-3">
                    <div className="flex justify-between items-center text-[7.5px] font-mono text-stone-400">
                      <span>PAPER DRAWINGS SYSTEM</span>
                      <span className="font-extrabold text-amber-700 bg-amber-50 px-1 py-0.2 rounded border border-amber-100 uppercase text-[7px]">
                        Inc_0{selectedIncident + 1}
                      </span>
                    </div>

                    {selectedIncident === 0 && (
                      <div className="space-y-1.5 animate-fade-in text-left">
                        <span className="text-[8.5px] font-black tracking-wider text-amber-900 font-mono block">INCIDENT 1: CONFUSING NAV BAR</span>
                        <div className="border border-stone-300 bg-white/75 p-2 rounded-lg text-center space-y-1">
                          <div className="flex justify-around items-center border-t border-stone-200/60 pt-1">
                            <div className="border border-dashed border-red-400 bg-red-50/50 p-1 rounded-md flex flex-col items-center">
                              <Icons.FileText size={15} className="text-stone-500" />
                              <span className="text-[6.5px] font-mono leading-none mt-0.5 line-through text-red-500">No label</span>
                            </div>
                            <Icons.Search size={14} className="text-stone-350 shrink-0" />
                            <Icons.User size={14} className="text-stone-350 shrink-0" />
                          </div>
                        </div>
                        <p className="text-[9.5px] text-stone-600 leading-normal italic bg-amber-50/50 p-1.5 rounded-lg border border-amber-100">
                          "All three participants struggled to recognize the leftmost navigation icon as the itinerary section, expecting a map or directional sign instead."
                        </p>
                      </div>
                    )}

                    {selectedIncident === 1 && (
                      <div className="space-y-1.5 animate-fade-in text-left">
                        <span className="text-[8.5px] font-black tracking-wider text-amber-900 font-mono block">INCIDENT 2: HOME OVER EXPLORE</span>
                        <div className="border border-stone-300 bg-white/75 p-2 rounded-lg text-center space-y-1">
                          <div className="text-[8px] font-mono text-stone-450 uppercase">LO-FI FEED</div>
                          <div className="border-t border-stone-200 pt-1 text-left space-y-1 text-[8.5px]">
                            <div className="p-1 border border-stone-150 bg-stone-50 rounded text-stone-400 text-center text-[7px]">
                              Static list (no input bar to type query search)
                            </div>
                          </div>
                        </div>
                        <p className="text-[9.5px] text-stone-600 leading-normal italic bg-amber-50/50 p-1.5 rounded-lg border border-amber-100">
                          "Participants expected a clear travel query input bar immediately on the top screen, but found only reviews feed they couldn't actively query."
                        </p>
                      </div>
                    )}

                    {selectedIncident === 2 && (
                      <div className="space-y-1.5 animate-fade-in text-left">
                        <span className="text-[8.5px] font-black tracking-wider text-amber-900 font-mono block">INCIDENT 3: UNTRIGGERABLE DAY SCHEDULING</span>
                        <div className="border border-stone-300 bg-white/75 p-2 rounded-lg text-center space-y-1">
                          <div className="grid grid-cols-4 gap-1 text-[7.5px] font-mono text-stone-350 text-center pb-1">
                            <div className="border border-stone-150 rounded">18 Jan</div>
                            <div className="border border-stone-150 rounded bg-amber-50/55 text-stone-500 font-bold">19 Jan</div>
                            <div className="border border-stone-150 rounded">20 Jan</div>
                            <div className="border border-stone-150 rounded">21 Jan</div>
                          </div>
                          <div className="text-[7.5px] text-red-500 font-bold border border-dashed border-red-300 p-1 rounded bg-red-50/20">
                            Where is the triggers? No clear button or line.
                          </div>
                        </div>
                        <p className="text-[9.5px] text-stone-600 leading-normal italic bg-amber-50/50 p-1.5 rounded-lg border border-amber-100">
                          "Participants spent minutes idling on the empty calendar grid. There was no clear '+ Add' or action mechanism to begin adding scheduler columns."
                        </p>
                      </div>
                    )}

                    {selectedIncident === 3 && (
                      <div className="space-y-1.5 animate-fade-in text-left">
                        <span className="text-[8.5px] font-black tracking-wider text-amber-900 font-mono block">INCIDENT 4: LOCK-IN ACTIVITIES</span>
                        <div className="border border-stone-300 bg-white/75 p-2 rounded-lg text-center space-y-1">
                          <div className="p-1.5 bg-stone-50 border border-stone-150 rounded text-left flex justify-between items-center text-[8px] font-bold text-stone-600">
                            <span>🛶 Milan Duomo Tour - 1:00 PM</span>
                            <span className="text-[6.5px] text-red-400 font-mono border border-dashed border-red-300 px-1 rounded-sm uppercase">Locked</span>
                          </div>
                        </div>
                        <p className="text-[9.5px] text-stone-600 leading-normal italic bg-amber-50/50 p-1.5 rounded-lg border border-amber-100">
                          "Participants felt trapped once an activity was added because each slot row lacked contextual delete buttons, trash signs, or swipe actions."
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="relative text-[7.5px] border-t border-[#E5E0D5] pt-1.5 font-bold text-amber-800 tracking-wider font-mono flex justify-between select-none">
                    <span>SEVERITY INDEX DECLARED:</span>
                    <span className="text-amber-700 font-black">
                      {selectedIncident === 0 && "SEV 3 (High)"}
                      {selectedIncident === 1 && "SEV 3 (High)"}
                      {selectedIncident === 2 && "SEV 4 (Critical)"}
                      {selectedIncident === 3 && "SEV 2 (Moderate)"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-1.5 text-center text-[9.5px] text-stone-400 font-medium">
                Sync tabs with Phase 3 on the right
              </div>
            </div>

            {/* Stage Indicator Step 3 */}
            <div className="bg-white border border-[#E9E5DE]/85 rounded-2xl p-6 space-y-4 shadow-sm relative flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="w-8 h-8 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center font-bold text-xs text-teal-850 shadow-2xs">
                    03
                  </span>
                  <span className="text-[9px] font-bold text-teal-700 bg-teal-50 border border-teal-100 px-2 py-0.5 rounded-full uppercase font-mono tracking-wider">
                    React High-Fi Pivot
                  </span>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-[#1E2129] tracking-tight">
                    Phase 3: Refinement &amp; Pivots
                  </h4>
                  <span className="inline-block bg-teal-50 text-teal-700 text-[9px] font-mono uppercase px-2 py-0.5 rounded font-black">
                    How We Fixed Them In Code
                  </span>
                </div>
                
                {/* Active Case Header */}
                <div className="py-2 px-3 bg-teal-50/40 rounded-xl border border-teal-100 text-teal-900 font-bold text-[10px] flex items-center justify-between">
                  <span>RESOLVED CONFLICT #{selectedIncident + 1}</span>
                  <span className="text-[8px] bg-teal-700 text-white rounded px-1.5 py-0.2 uppercase font-mono tracking-widest leading-none">Implemented</span>
                </div>

                {/* Simulated Modern App Screens */}
                <div className="border border-teal-100/70 rounded-xl overflow-hidden bg-white p-4.5 min-h-[225px] flex flex-col justify-between shadow-xs relative">
                  {/* Subtle technical overlay scanlines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(15,118,110,0.012)_1.2px,transparent_1.2px)] bg-[size:100%_12px] opacity-[0.8] select-none pointer-events-none" />

                  <div className="relative z-10 space-y-3">
                    <div className="flex justify-between items-center text-[7.5px] font-mono text-zinc-400">
                      <span>HI-FI REFINED VIEW</span>
                      <span className="font-extrabold text-teal-700 bg-teal-50/55 px-1 py-0.2 rounded border border-teal-100/50 uppercase text-[7px]">
                        100% Verified
                      </span>
                    </div>

                    {selectedIncident === 0 && (
                      <div className="space-y-2 animate-fade-in text-left">
                        <div className="bg-white border border-stone-200 py-2.5 rounded-xl flex justify-around items-center shadow-xs">
                          <div className="flex flex-col items-center text-teal-700">
                            <Icons.Compass size={15} className="animate-bounce" />
                            <span className="text-[9px] font-extrabold tracking-tight mt-0.5">Plan</span>
                          </div>
                          <div className="flex flex-col items-center text-stone-400">
                            <Icons.Search size={15} />
                            <span className="text-[9px] font-semibold tracking-tight mt-0.5">Explore</span>
                          </div>
                          <div className="flex flex-col items-center text-stone-400">
                            <Icons.User size={15} />
                            <span className="text-[9px] font-semibold tracking-tight mt-0.5">Profile</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-stone-600 leading-normal">
                          We redesigned the icon to look like a <strong className="text-teal-850">Map Compass</strong> (representing local paths) and added persistent, clear, high-contrast labels underneath each button.
                        </p>
                      </div>
                    )}

                    {selectedIncident === 1 && (
                      <div className="space-y-2 animate-fade-in text-left">
                        <div className="bg-[#FAF9F5] border border-stone-150 rounded-xl p-2.5 space-y-2 shadow-2xs">
                          <div className="bg-white border border-stone-200 rounded-lg p-1.5 flex items-center gap-2">
                            <Icons.Search size={11} className="text-teal-600 animate-pulse" />
                            <span className="text-[9px] text-stone-400">Search local gems, cafes, streets...</span>
                          </div>
                          <div className="flex gap-1 text-[8px] font-black">
                            <span className="bg-teal-50 text-teal-800 border border-teal-100 px-1.5 py-0.5 rounded">#Venice</span>
                            <span className="bg-stone-50 text-stone-600 border border-stone-150 px-1.5 py-0.5 rounded">#LocalCoffee</span>
                          </div>
                        </div>
                        <p className="text-[10px] text-stone-600 leading-normal">
                          We separated the home reviews stream into a dedicated Explore section with a prominent, <strong className="text-teal-850">elastic top keyword input bar</strong> and rich thematic tags.
                        </p>
                      </div>
                    )}

                    {selectedIncident === 2 && (
                      <div className="space-y-2 animate-fade-in text-left">
                        <div className="bg-stone-50 border border-stone-150 rounded-xl p-2 flex justify-between items-center shadow-2xs bg-white">
                          <div className="text-left space-y-0.5">
                            <span className="text-[9.5px] font-black text-stone-850">Italy Day 2 Schedule</span>
                            <p className="text-[7.5px] text-[#8A7052] font-semibold font-mono">19 Jan, Morning is open</p>
                          </div>
                          <button className="bg-teal-700 hover:bg-teal-800 text-white text-[9px] font-extrabold py-1 px-2 rounded-lg shadow-sm flex items-center gap-1 transition-all cursor-pointer">
                            <Icons.Plus size={10} className="stroke-[3]" />
                            <span>Add Option</span>
                          </button>
                        </div>
                        <p className="text-[10px] text-stone-600 leading-normal">
                          We implemented explicit <strong className="text-teal-850">"+ Add Option" CTA actions</strong> on every schedule column so user flows are structured without uncertainty.
                        </p>
                      </div>
                    )}

                    {selectedIncident === 3 && (
                      <div className="space-y-2 animate-fade-in text-left">
                        <div className="bg-white border border-stone-200 rounded-xl p-2.5 flex justify-between items-center shadow-2xs">
                          <div className="flex items-center gap-1.5">
                            <Icons.CheckSquare size={11} className="text-teal-605" />
                            <span className="text-[9px] font-extrabold text-stone-800">Milan Duomo Tour</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <button className="p-1 rounded bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-500">
                              <Icons.PenTool size={9} />
                            </button>
                            <button className="p-1 rounded bg-red-50 hover:bg-red-100 border border-red-100 text-red-650">
                              <Icons.Trash2 size={9} />
                            </button>
                          </div>
                        </div>
                        <p className="text-[10px] text-stone-600 leading-normal">
                          We mounted clear <strong className="text-red-700">Trash icon &amp; edit buttons</strong> on every timeline element, enabling seamless trip modifications in single clicks.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="relative text-[7.5px] border-t border-stone-150 pt-1.5 font-bold text-teal-800 tracking-wider font-mono flex justify-between select-none">
                    <span>CO-DESIGN RE-TEST VALIDATION:</span>
                    <span className="text-teal-750 bg-teal-50 px-1 rounded-sm border border-teal-100 font-extrabold text-[7.5px]">
                      {selectedIncident === 0 && "100% RECOGNISED"}
                      {selectedIncident === 1 && "94% SUCCESS RATE"}
                      {selectedIncident === 2 && "97% ACCESSIBILITY"}
                      {selectedIncident === 3 && "100% DELETED EASILY"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-1.5 text-center text-[10px] font-mono text-teal-700 font-bold uppercase tracking-wider">
                Successfully Solved!
              </div>
            </div>

          </div>

          {/* DYNAMIC COMPARATIVE LABORATORY SECTION (PHASE 2 VS PHASE 3) - REPLACED BY SIDE-BY-SIDE CARDS ABOVE */}
          {false && (
          <div id="usability-lab-view" className="bg-stone-50 border border-stone-200/90 rounded-3xl p-6 md:p-8 space-y-6 text-left shadow-xs transition-all">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-stone-200/70 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono font-black uppercase text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded">
                    Co-Design Workflow
                  </span>
                  <span className="text-[9px] font-mono font-black uppercase text-[#8A7052] bg-amber-100/50 px-2 py-0.5 rounded">
                    UX Testing Lab
                  </span>
                </div>
                <h3 className="font-black font-display text-[16px] text-zinc-900">
                  Interactive Evaluation: Phase 2 Paper Mockup vs. Phase 3 Refined Pivot
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed max-w-2xl">
                  Click through the 4 critical usability incidents identified in initial co-design test loops. Toggle between the low-fidelity physical paper prototype findings and interactive high-fidelity solutions implemented in response.
                </p>
              </div>

              {/* Lab Phase Display Toggles */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-stone-200 shadow-xs shrink-0 select-none text-[10px] font-bold">
                <button
                  onClick={() => setLabPhase('both')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    labPhase === 'both' ? 'bg-[#8A7052] text-white shadow-xs' : 'text-stone-500 hover:text-[#1E2129]'
                  }`}
                >
                  Side-by-Side View
                </button>
                <button
                  onClick={() => setLabPhase('lofi')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    labPhase === 'lofi' ? 'bg-[#8A7052] text-white shadow-xs' : 'text-stone-500 hover:text-[#1E2129]'
                  }`}
                >
                  Phase 2 (Lo-Fi Photo)
                </button>
                <button
                  onClick={() => setLabPhase('hifi')}
                  className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                    labPhase === 'hifi' ? 'bg-[#8A7052] text-white shadow-xs' : 'text-stone-500 hover:text-[#1E2129]'
                  }`}
                >
                  Phase 3 (Hi-Fi React)
                </button>
              </div>
            </div>

            {/* 4 Usability Incidents Selector Menu */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "1. Confusing Nav Bar", type: "Navigation Icon", severity: 3 },
                { label: "2. Search Vs Home Feed", type: "Discoverability", severity: 3 },
                { label: "3. Calendar Activity Block", type: "Add Event Issue", severity: 4 },
                { label: "4. Removing Trip Entries", type: "Activity Cleanup", severity: 2 }
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIncident(idx)}
                  className={`p-3 rounded-2xl border text-left transition-all relative cursor-pointer flex flex-col justify-between h-[80px] group ${
                    selectedIncident === idx
                      ? 'bg-white border-[#8A7052] ring-1 ring-[#8A7052]/40 shadow-sm'
                      : 'bg-white/85 border-stone-200/90 hover:border-stone-300 hover:bg-white'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[8px] font-mono text-zinc-400 font-extrabold uppercase tracking-wider block">
                      {item.type}
                    </span>
                    <h5 className={`font-black text-[11px] leading-tight transition-colors ${
                      selectedIncident === idx ? 'text-zinc-900' : 'text-zinc-700 group-hover:text-zinc-950'
                    }`}>
                      {item.label}
                    </h5>
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <span className={`text-[8.5px] font-bold px-1.5 py-0.5 rounded font-mono ${
                      item.severity >= 4 
                        ? 'bg-red-50 text-red-700 border border-red-100' 
                        : item.severity === 3 
                        ? 'bg-amber-50 text-amber-700 border border-amber-100'
                        : 'bg-yellow-50 text-yellow-800 border border-yellow-102'
                    }`}>
                      Severity {item.severity}
                    </span>
                    <Icons.ChevronRight size={12} className={`text-stone-300 group-hover:text-stone-500 transition-all ${
                      selectedIncident === idx ? 'text-stone-700 translate-x-0.5' : ''
                    }`} />
                  </div>
                </button>
              ))}
            </div>

            {/* Dynamic Comparison Content Board */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* PHASE 2: LOWER FIDELITY PAPER SCHEMATIC CANVAS */}
              {(labPhase === 'both' || labPhase === 'lofi') && (
                <div className={`space-y-4 ${
                  labPhase === 'both' ? 'lg:col-span-6' : 'lg:col-span-12'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-stone-600 font-mono text-[10px]">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                      <span className="font-extrabold uppercase text-amber-700">PHASE 2 ORIGINAL PAPER VERSION</span>
                    </div>
                    <span className="text-[9px] font-mono text-stone-400">#notebook-lofi-sketch</span>
                  </div>

                  {/* Ringed Notebook Shell */}
                  <div className="bg-[#FAF8F5] border border-stone-250/90 rounded-3xl p-5 relative overflow-hidden shadow-inner flex flex-col justify-between min-h-[360px]">
                    {/* Spiral binder loops */}
                    <div className="absolute top-0 inset-x-0 h-4 flex justify-around px-8 pointer-events-none z-20">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div key={i} className="w-2 h-5 rounded-full bg-stone-300/90 border-r border-stone-900/15 shadow-xs -mt-2" />
                      ))}
                    </div>

                    {/* Lined draft paper effect overlay */}
                    <div className="absolute inset-0 bg-[#FDFCFA] opacity-[0.98] select-none pointer-events-none" style={{
                      backgroundImage: 'linear-gradient(rgba(186, 218, 245, 0.45) 1.5px, transparent 1.5px)',
                      backgroundSize: '100% 16px',
                      backgroundPosition: '0 10px'
                    }}>
                      <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-red-200/90" />
                    </div>

                    {/* Paper Drawing Canvas */}
                    <div className="relative z-10 pt-4 flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b border-stone-200/60 pb-1.5">
                          <span className="text-[10px] font-mono text-stone-400">Sketch Panel #{selectedIncident + 1}</span>
                          <span className="text-[9.5px] font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded font-mono">
                            CO-DESIGN STUDY
                          </span>
                        </div>

                        {/* Incident Description Text */}
                        <div className="space-y-1">
                          <h4 className="font-bold text-xs text-stone-850">
                            {selectedIncident === 0 && "INCIDENT: Unclear navigation icon in bar"}
                            {selectedIncident === 1 && "INCIDENT: Search icon mistaken for home section"}
                            {selectedIncident === 2 && "INCIDENT: Missing calendar activity insertion action"}
                            {selectedIncident === 3 && "INCIDENT: Undiscoverable trip option removal tools"}
                          </h4>
                          <p className="text-[10px] text-stone-500 leading-normal italic">
                            {selectedIncident === 0 && "\"All three participants struggled to recognize the leftmost navigation icon as the itinerary section\""}
                            {selectedIncident === 1 && "\"Participants expected the magnifying glass icon to represent search functionality and were unsure where the home page was located\""}
                            {selectedIncident === 2 && "\"Participants stalled on the calendar itinerary page because there was no obvious 'Add Activity' action\""}
                            {selectedIncident === 3 && "\"Participants were unsure how to delete activities from itineraries\""}
                          </p>
                        </div>

                        {/* Hand-Drawn Sketch Representation */}
                        {selectedIncident === 0 && (
                          <div className="border border-stone-300/80 bg-white/70 p-4 rounded-xl space-y-4 animate-fade-in relative min-h-[140px] shadow-xs">
                            <div className="flex justify-between pb-1 border-b border-stone-150">
                              <span className="text-[8px] font-mono text-stone-400">LO-FI SKETCH VIEW</span>
                              <span className="text-[8px] font-bold text-stone-500 font-mono">PAPER SHEET #1</span>
                            </div>
                            <div className="border-2 border-dashed border-stone-300 rounded p-2 text-center bg-[#FAF8F5]/80 space-y-1 relative">
                              <div className="text-[10px] font-bold font-serif italic text-stone-700">ITINERARIES LIST (Active view)</div>
                              <div className="w-2/3 h-1 bg-stone-250 mx-auto rounded" />
                              <div className="w-1/2 h-1 bg-stone-200 mx-auto rounded mt-1" />
                              
                              {/* Delineated nav bar with pointer */}
                              <div className="border-t-2 border-stone-300/70 mt-6 pt-1 grid grid-cols-5 gap-1.5">
                                <div className="border-2 border-amber-400 bg-amber-100/40 p-1 text-[7.5px] font-serif font-black flex flex-col items-center justify-center relative">
                                  {/* Confusing Spiral Notepad Icon representation */}
                                  <div className="w-3.5 h-3.5 border-1.5 border-stone-700 rounded-xs flex flex-col justify-around p-0.5 mb-0.5">
                                    <div className="h-[1.5px] bg-stone-600 w-full" />
                                    <div className="h-[1.5px] bg-stone-600 w-full" />
                                    <div className="h-[1.5px] bg-stone-600 w-full" />
                                  </div>
                                  {/* Absolute pencil markup pointer */}
                                  <div className="absolute -top-12 -left-2 bg-yellow-105 border border-amber-300 p-1 rounded max-w-[90px] shadow-xs z-20 text-stone-880 leading-tight">
                                    <span className="text-[6.5px] tracking-tight block font-black text-amber-800 uppercase font-mono">Pencil Arrow</span>
                                    <span className="text-[6.5px] font-serif text-stone-700 leading-none">"Looks like a checklist text document! No labels!"</span>
                                  </div>
                                </div>
                                <div className="p-1 opacity-25 text-stone-400">🔍</div>
                                <div className="p-1 opacity-25 text-stone-400">➕</div>
                                <div className="p-1 opacity-25 text-stone-400">🔔</div>
                                <div className="p-1 opacity-25 text-stone-400">👤</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedIncident === 1 && (
                          <div className="border border-stone-300/80 bg-white/70 p-4 rounded-xl space-y-4 animate-fade-in relative min-h-[140px] shadow-xs">
                            <div className="flex justify-between pb-1 border-b border-stone-150">
                              <span className="text-[8px] font-mono text-stone-400">LO-FI SKETCH VIEW</span>
                              <span className="text-[8px] font-bold text-stone-500 font-mono">PAPER SHEET #2</span>
                            </div>
                            <div className="border-2 border-dashed border-stone-300 rounded p-2 bg-[#FAF8F5]/80 space-y-2 text-center text-stone-600 font-serif relative">
                              <div className="text-[9px] font-black uppercase text-stone-700">"REVIEWS & FEED"</div>
                              <div className="w-10/12 h-0.5 bg-stone-250 mx-auto" />
                              <p className="text-[7.5px] text-stone-500">List of friend posts below...</p>
                              
                              {/* Magnifying Glass search icon highlighted */}
                              <div className="border border-transparent p-1 mt-2 relative">
                                <span className="inline-block border-2 border-amber-400 bg-amber-100/50 p-1.5 rounded-full text-xs font-mono">🔍</span>
                                <div className="absolute -top-8 -right-3 bg-yellow-105 border border-amber-300 p-1 rounded max-w-[100px] shadow-xs z-20 text-stone-880 text-left">
                                  <span className="text-[6.5px] font-black text-amber-800 uppercase font-mono block">PARTICIPANT CONFUSION</span>
                                  <span className="text-[6.5px] font-serif text-stone-700 leading-none">"I click 🔍 to look for a specific local noodle bar, but it doesn't offer a query field! It just goes to social trends!"</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedIncident === 2 && (
                          <div className="border border-stone-300/80 bg-white/70 p-4 rounded-xl space-y-4 animate-fade-in relative min-h-[140px] shadow-xs">
                            <div className="flex justify-between pb-1 border-b border-stone-150">
                              <span className="text-[8px] font-mono text-stone-400">LO-FI SKETCH VIEW</span>
                              <span className="text-[8px] font-bold text-stone-500 font-mono">PAPER SHEET #3</span>
                            </div>
                            <div className="border-2 border-dashed border-stone-300 rounded p-2.5 bg-[#FAF8F5]/80 text-left text-stone-600 font-serif relative">
                              <div className="flex justify-between pb-1 border-b border-stone-200">
                                <span className="text-[8.5px] font-black uppercase">Calendar Schedule (Italy Plan)</span>
                                <span className="text-[8px] font-bold">Jan 18 - Jan 21</span>
                              </div>
                              
                              {/* Grid representation */}
                              <div className="grid grid-cols-4 gap-1 mt-1.5 text-center text-[7px] font-mono text-stone-600">
                                <div className="border border-stone-250 bg-white p-1 rounded">
                                  <span className="block font-bold">18</span>
                                  <p className="text-[5.5px] text-stone-500 mt-1 line-clamp-1">Travel Venice</p>
                                </div>
                                <div className="border border-stone-250 bg-white p-1 rounded">
                                  <span className="block font-bold">19</span>
                                  <p className="text-[5.5px] text-stone-500 mt-1 line-clamp-1">Boat Ride</p>
                                </div>
                                <div className="border border-stone-300 bg-yellow-105 p-1 rounded relative">
                                  <span className="block font-semibold text-stone-800">20</span>
                                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mx-auto mt-0.5 block" />
                                  <div className="absolute -top-7 -left-4 bg-yellow-105 border border-amber-300 p-1 rounded max-w-[90px] shadow-xs z-20 text-stone-880 leading-tight">
                                    <span className="text-[6px] font-black text-amber-800 uppercase font-mono block">STALLING LOOP</span>
                                    <span className="text-[6.2px] text-stone-700 leading-none">"How do I add a tour activity here on Day 20? No visible links or buttons!"</span>
                                  </div>
                                </div>
                                <div className="border border-stone-250 bg-white p-1 rounded">
                                  <span className="block font-bold">21</span>
                                  <p className="text-[5.5px] text-stone-500 mt-1 line-clamp-1">To Milan</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {selectedIncident === 3 && (
                          <div className="border border-stone-300/80 bg-white/70 p-4 rounded-xl space-y-4 animate-fade-in relative min-h-[140px] shadow-xs">
                            <div className="flex justify-between pb-1 border-b border-stone-150">
                              <span className="text-[8px] font-mono text-stone-400">LO-FI SKETCH VIEW</span>
                              <span className="text-[8px] font-bold text-stone-500 font-mono">PAPER SHEET #3</span>
                            </div>
                            <div className="border-2 border-dashed border-stone-300 rounded p-2.5 bg-[#FAF8F5]/80 text-left text-stone-600 relative">
                              <div className="text-[8px] font-bold font-serif text-stone-400 uppercase tracking-widest pb-1">Activity Card Block</div>
                              <div className="bg-white border-2 border-amber-400 p-2 rounded-lg space-y-1 relative">
                                <div className="flex justify-between text-stone-800">
                                  <span className="text-[9.5px] font-serif font-semibold">10:00 AM • Gondola Ride</span>
                                  <span className="text-[8px] font-bold text-stone-450">Day 19</span>
                                </div>
                                <p className="text-[7.5px] text-stone-500 italic leading-none">Venice, Italy • 4.9⭐</p>
                                
                                {/* Absolute pencil arrow */}
                                <div className="absolute -top-10 -right-2 bg-yellow-105 border border-amber-300 p-1 rounded max-w-[110px] shadow-xs z-20 text-stone-880 text-left leading-tight">
                                  <span className="text-[6px] font-black text-amber-800 uppercase font-mono block">DELETION HOLE</span>
                                  <span className="text-[6px] font-serif text-stone-700 leading-normal">"I added this booking by accident. How can I undo or wipe it out? Touching it does nothing."</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Participant testing quote block */}
                      <div className="pt-4 mt-4 border-t border-stone-200/50 bg-[#FAF8F5]/40 rounded-xl p-2.5">
                        <div className="flex gap-2 items-center text-[9px] font-mono text-stone-400 uppercase font-extrabold pb-1">
                          <Icons.MessageSquare size={10} className="text-zinc-400" />
                          <span>Participant Evaluation Raw Output</span>
                        </div>
                        <p className="font-serif italic text-[11px] text-stone-600 leading-normal">
                          {selectedIncident === 0 && "\"I was clicking on the leftmost icon hoping to write a note, whereas I wanted to plan. I needed label cues inside the bottom bar...\""}
                          {selectedIncident === 1 && "\"The search magnifying glass only loaded generic posts near me. I thought clicking search allowed typing structured tags like Kyoto with exact category matches!\""}
                          {selectedIncident === 2 && "\"I added three days to the itinerary but was stuck looking for a 'plus' button or add input. It was frustrating looking at the calendar...\""}
                          {selectedIncident === 3 && "\"I wanted to clean up my duplicate hotel entries on Tuesday but there was no trash icon or long-press pop-up block explaining deletion methods.\""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* PHASE 3: REFINED LIVE HIGH FIDELITY TOUCHPOINT CANVAS */}
              {(labPhase === 'both' || labPhase === 'hifi') && (
                <div className={`space-y-4 ${
                  labPhase === 'both' ? 'lg:col-span-6' : 'lg:col-span-12'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-teal-650 font-mono text-[10px]">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse" />
                      <span className="font-extrabold uppercase text-teal-800">PHASE 3 HIGH-FI REFINED INTERACTION</span>
                    </div>
                    <span className="text-[9px] font-mono text-teal-400 font-extrabold bg-teal-50 px-2 py-0.5 rounded-full">LIVE PREVIEW</span>
                  </div>

                  {/* High Fidelity Screen Shell simulating refined layout */}
                  <div className="bg-white border border-stone-200 rounded-3xl p-6 min-h-[360px] flex flex-col justify-between shadow-sm relative group hover:border-teal-300 transition-all">
                    
                    {/* Interactive Showcase Frame header */}
                    <div className="flex justify-between items-center pb-3 border-b border-stone-100 select-none">
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-[9px] font-mono text-stone-400">localeyes-client // live-fix</span>
                    </div>

                    {/* Highly Interactive Component Box */}
                    <div className="my-6 flex-1 flex flex-col justify-center">
                      
                      {selectedIncident === 0 && (
                        <div className="space-y-4 animate-fade-in text-center">
                          <h5 className="text-[11.5px] font-extrabold text-[#1E2129]">Redesigned Labeled Navigation System</h5>
                          <p className="text-[10px] text-slate-500 leading-normal max-w-sm mx-auto">
                            We completely reworked the navigation frame. Icons are redefined and explicitly labeled to prevent semantic mismatches!
                          </p>

                          {/* Navigation Selector UI */}
                          <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-stone-150 inline-block mx-auto space-y-3">
                            <div className="flex justify-center gap-4 text-stone-500 text-[10px] font-mono select-none">
                              <button 
                                onClick={() => setHifiNavSelection('old')}
                                className={`px-2 py-1 rounded border transition-all ${
                                  hifiNavSelection === 'old' ? 'bg-amber-100 border-amber-300 text-amber-800' : 'bg-white'
                                }`}
                              >
                                View Confusing (Old)
                              </button>
                              <button 
                                onClick={() => setHifiNavSelection('new')}
                                className={`px-2 py-1 rounded border transition-all ${
                                  hifiNavSelection === 'new' ? 'bg-teal-100 border-teal-300 text-teal-800 font-extrabold' : 'bg-white'
                                }`}
                              >
                                View Refined (New)
                              </button>
                            </div>

                            {/* Demo Nav Bar Display */}
                            <div className="bg-white border border-stone-200 rounded-xl px-4 py-2.5 flex justify-around gap-6 items-center shadow-xs">
                              {hifiNavSelection === 'old' ? (
                                // Confusion version
                                <div className="flex justify-around w-full max-w-xs text-stone-450 text-xs">
                                  <div className="flex flex-col items-center p-1.5 bg-amber-50 rounded border border-amber-200 text-amber-700 animate-pulse" title="Notebook Icon looks like Checklist">
                                    <Icons.FileText size={16} />
                                  </div>
                                  <div className="p-1.5 hover:text-stone-700"><Icons.Search size={16} /></div>
                                  <div className="p-1.5 hover:text-stone-700"><Icons.PlusCircle size={16} /></div>
                                  <div className="p-1.5 hover:text-stone-700"><Icons.User size={16} /></div>
                                </div>
                              ) : (
                                // New labeled refined layout
                                <div className="flex justify-around w-full max-w-xs text-stone-500 text-[10px]">
                                  <div className="flex flex-col items-center text-teal-800 font-bold scale-105 transition-transform">
                                    <div className="bg-teal-50 border border-teal-100 p-1.5 rounded-lg">
                                      <Icons.Compass size={15} className="text-teal-700" />
                                    </div>
                                    <span className="text-[8px] tracking-wider mt-0.5">Plan</span>
                                  </div>
                                  <div className="flex flex-col items-center opacity-65 hover:opacity-100">
                                    <div className="p-1.5">
                                      <Icons.Search size={15} />
                                    </div>
                                    <span className="text-[8px] tracking-wider">Explore</span>
                                  </div>
                                  <div className="flex flex-col items-center opacity-65 hover:opacity-100">
                                    <div className="p-1.5">
                                      <Icons.PlusCircle size={15} />
                                    </div>
                                    <span className="text-[8px] tracking-wider">Post</span>
                                  </div>
                                  <div className="flex flex-col items-center opacity-65 hover:opacity-100">
                                    <div className="p-1.5">
                                      <Icons.User size={15} />
                                    </div>
                                    <span className="text-[8px] tracking-wider">Profile</span>
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            {hifiNavSelection === 'new' && (
                              <div className="bg-teal-50 border border-teal-100/70 p-2 rounded-xl text-[9px] text-teal-850 flex items-center gap-1.5 leading-normal max-w-xs justify-center mx-auto animate-fade-in">
                                <Icons.Sparkles size={11} className="text-teal-600 shrink-0" />
                                <span>Refinement adds persistent text labels and switches the icon to a map compass!</span>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {selectedIncident === 1 && (
                        <div className="space-y-3 animate-fade-in text-center max-w-sm mx-auto">
                          <h5 className="text-[11.5px] font-extrabold text-[#1E2129]">Dedicated Explore Query Integration</h5>
                          <p className="text-[9.5px] text-slate-500 leading-normal">
                            Added a physical search field directly to the explore portal. Try clicking a fast preset tag below to query attractions live in Phase 3!
                          </p>

                          {/* Interactive Search Field */}
                          <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-stone-150 text-left space-y-2.5">
                            <div className="relative">
                              <Icons.Search size={13} className="absolute left-3 top-2.5 text-stone-400" />
                              <input 
                                type="text"
                                value={hifiSearchQuery}
                                onChange={(e) => setHifiSearchQuery(e.target.value)}
                                placeholder="Type Kyoto, Tokyo, or Sushi..."
                                className="w-full pl-8 pr-3 py-1.5 bg-white border border-stone-200 text-[10.5px] rounded-xl focus:outline-hidden focus:border-teal-500 font-medium text-stone-750"
                              />
                            </div>

                            {/* Preset Buttons */}
                            <div className="flex flex-wrap gap-1.5">
                              {['Kyoto', 'Tokyo', 'Sushi'].map((tag) => (
                                <button 
                                  key={tag}
                                  onClick={() => setHifiSearchQuery(tag)}
                                  className={`px-2 py-0.5 rounded-full border text-[9px] font-bold font-mono transition-all cursor-pointer ${
                                    hifiSearchQuery.toLowerCase() === tag.toLowerCase()
                                      ? 'bg-teal-50 border-teal-200 text-teal-800'
                                      : 'bg-white border-stone-200 text-stone-500 hover:bg-stone-50'
                                  }`}
                                >
                                  #{tag}
                                </button>
                              ))}
                              {hifiSearchQuery && (
                                <button 
                                  onClick={() => setHifiSearchQuery('')}
                                  className="px-2 py-0.5 rounded-full border border-stone-200 bg-stone-100 text-[9px] text-stone-500 cursor-pointer"
                                >
                                  Clear
                                </button>
                              )}
                            </div>

                            {/* Simulated Result Records */}
                            <div className="bg-white border border-stone-200 rounded-xl p-2.5 text-[9.5px] space-y-1.5 min-h-[50px] flex flex-col justify-center">
                              {hifiSearchQuery.toLowerCase() === 'kyoto' ? (
                                <div className="space-y-1 animate-fade-in">
                                  <div className="font-extrabold text-stone-850 flex items-center justify-between">
                                    <span>⛩️ Fushimi Inari Back-Alley Entrance</span>
                                    <span className="text-teal-600 font-mono">98% local match</span>
                                  </div>
                                  <p className="text-[8.5px] text-stone-450">Avoid the massive crowd by taking the bamboo farm side trail.</p>
                                </div>
                              ) : hifiSearchQuery.toLowerCase() === 'tokyo' ? (
                                <div className="space-y-1 animate-fade-in">
                                  <div className="font-extrabold text-stone-850 flex items-center justify-between">
                                    <span>🍣 Tsukiji Fish Market Outer Stall</span>
                                    <span className="text-teal-600 font-mono">92% local match</span>
                                  </div>
                                  <p className="text-[8.5px] text-stone-450">Go to the second alley to find fresh sea urican uni bowl.</p>
                                </div>
                              ) : hifiSearchQuery.toLowerCase() === 'sushi' ? (
                                <div className="space-y-1 animate-fade-in">
                                  <div className="font-extrabold text-stone-850 flex items-center justify-between">
                                    <span>🇯🇵 Ginza Jiro-Style Local Spot</span>
                                    <span className="text-teal-600 font-mono">95% local match</span>
                                  </div>
                                  <p className="text-[8.5px] text-stone-450">Fabulous quality, requires booking 24 hours via local partner.</p>
                                </div>
                              ) : hifiSearchQuery ? (
                                <div className="text-center py-2 text-stone-400 font-mono text-[9px]">
                                  No specific match for "{hifiSearchQuery}". Type 'Kyoto'!
                                </div>
                              ) : (
                                <div className="text-center py-2 text-stone-400 font-mono text-[9px]">
                                  Click tag or type value to execute index search!
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {selectedIncident === 2 && (
                        <div className="space-y-3 animate-fade-in text-center max-w-sm mx-auto">
                          <h5 className="text-[11.5px] font-extrabold text-[#1E2129]">Prominent "+ Add Activity" Floating Action Button</h5>
                          <p className="text-[9.5px] text-slate-500 leading-normal">
                            We integrated a high-contrast floating button to prompt activity scheduling. Try typing an activity below and click the FAB to add to your plan!
                          </p>

                          {/* Dynamic Calendar Grid Sandbox */}
                          <div className="bg-[#FAF9F5] p-3.5 rounded-2xl border border-stone-150 text-left space-y-2 relative min-h-[160px] flex flex-col justify-between">
                            <div className="space-y-1.5 flex-1 pb-8">
                              <div className="flex justify-between items-center text-[8.5px] font-bold font-mono text-zinc-400 border-b pb-1">
                                <span>VENICE CALENDAR PLAN</span>
                                <span className="text-teal-700 uppercase bg-teal-50 px-1 rounded">Day 18 - 21</span>
                              </div>
                              <ul className="text-[10px] space-y-1 text-stone-750">
                                {hifiItineraryActivities.map((act, i) => (
                                  <li key={i} className="bg-white border border-stone-200/80 rounded-lg py-1 px-2 flex items-center justify-between animate-fade-in select-none">
                                    <span className="font-medium text-stone-800">{act}</span>
                                    <span className="text-[8px] text-teal-650 font-mono font-bold bg-teal-50/50 px-1 rounded">Item {i+1}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Pulse FAB Button in Sandbox */}
                            <button 
                              onClick={() => setHifiShowAddDialog(!hifiShowAddDialog)}
                              className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-teal-600 hover:bg-teal-700 text-white flex items-center justify-center shadow-lg hover:rotate-90 transition-all duration-300 cursor-pointer animate-bounce"
                              title="Floating Add Activity"
                            >
                              <Icons.Plus size={16} />
                            </button>

                            {/* Popover Form within sandbox */}
                            {hifiShowAddDialog && (
                              <div className="absolute inset-x-2 bottom-2 bg-white/95 border border-teal-200 rounded-xl p-2.5 shadow-md flex gap-2 items-center animate-fade-in z-20">
                                <input 
                                  type="text"
                                  value={hifiNewActivityText}
                                  onChange={(e) => setHifiNewActivityText(e.target.value)}
                                  placeholder="New activity (e.g., Shibuya Sky)..."
                                  className="flex-1 px-2.5 py-1 text-[10px] bg-stone-50 border border-stone-200 rounded focus:outline-hidden text-stone-800"
                                  onKeyDown={(e) => {
                                    if (e.key === 'Enter' && hifiNewActivityText.trim()) {
                                      setHifiItineraryActivities([...hifiItineraryActivities, hifiNewActivityText.trim()]);
                                      setHifiNewActivityText('');
                                      setHifiShowAddDialog(false);
                                    }
                                  }}
                                />
                                <button
                                  onClick={() => {
                                    if (hifiNewActivityText.trim()) {
                                      setHifiItineraryActivities([...hifiItineraryActivities, hifiNewActivityText.trim()]);
                                      setHifiNewActivityText('');
                                      setHifiShowAddDialog(false);
                                    }
                                  }}
                                  className="bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-[9px] px-2 py-1 rounded cursor-pointer"
                                >
                                  Add
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {selectedIncident === 3 && (
                        <div className="space-y-3 animate-fade-in text-center max-w-sm mx-auto">
                          <h5 className="text-[11.5px] font-extrabold text-[#1E2129]">Explaining Actions via Bottom Contextual Sheet</h5>
                          <p className="text-[9.5px] text-slate-500 leading-normal">
                            Instead of static panels, clicking any scheduled entry triggers a slide-up menu displaying crystal-clear option controls. Try selecting an itinerary item below:
                          </p>

                          {/* Sandbox UI with bottom slider simulation */}
                          <div className="bg-[#FAF9F5] p-3 rounded-2xl border border-stone-150 text-left min-h-[160px] relative overflow-hidden flex flex-col justify-between">
                            <div className="space-y-1.5 flex-1">
                              <span className="text-[8.5px] font-mono font-bold text-stone-400 uppercase block">ACTIVE PLAN CELLS</span>
                              
                              {hifiItineraryActivities.length === 0 ? (
                                <div className="text-center py-6 text-stone-400 font-mono text-[9px]">
                                  No items list. Click "3. Calendar Activity Block" above and insert some elements first!
                                </div>
                              ) : (
                                <div className="space-y-1.5">
                                  {hifiItineraryActivities.map((act, i) => (
                                    <div 
                                      key={i}
                                      onClick={() => {
                                        setHifiDeleteTargetIndex(i);
                                        setHifiShowDeleteDrawer(true);
                                      }}
                                      className="bg-white border border-stone-150 hover:border-red-300 rounded-lg p-2 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-all hover:bg-stone-50/50"
                                      title="Click to trigger delete panel"
                                    >
                                      <div>
                                        <h6 className="text-[9.5px] font-extrabold text-stone-850 leading-none">{act}</h6>
                                        <p className="text-[8px] text-stone-400 mt-0.5">Click to delete/edit</p>
                                      </div>
                                      <Icons.MoreVertical size={11} className="text-stone-400" />
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Bottom Drawer Overlay within sandbox */}
                            {hifiShowDeleteDrawer && hifiDeleteTargetIndex !== null && (
                              <div className="absolute inset-x-0 bottom-0 bg-white border-t border-stone-250 p-3 rounded-t-xl shadow-lg space-y-2 animate-slide-up z-20">
                                <div className="flex justify-between items-center pb-1 border-b">
                                  <span className="text-[9px] font-extrabold text-stone-800">EDIT SELECTION</span>
                                  <button 
                                    onClick={() => setHifiShowDeleteDrawer(false)}
                                    className="text-stone-400 text-[10px] hover:text-stone-800 font-bold"
                                  >
                                    ✕
                                  </button>
                                </div>
                                <p className="text-[9px] text-stone-500">
                                  Manage entry: <span className="font-bold text-stone-700">{hifiItineraryActivities[hifiDeleteTargetIndex]}</span>
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-[9.5px] font-bold">
                                  <button 
                                    onClick={() => {
                                      alert("Mock Edit Event Trigger: In high-fidelity, this allows editing scheduling parameters.");
                                      setHifiShowDeleteDrawer(false);
                                    }}
                                    className="border border-stone-200 hover:bg-stone-100 py-1.5 rounded-lg flex items-center justify-center gap-1.5 text-stone-600 font-extrabold cursor-pointer"
                                  >
                                    <Icons.PenTool size={11} />
                                    <span>Edit Option</span>
                                  </button>
                                  <button 
                                    onClick={() => {
                                      const updatedList = hifiItineraryActivities.filter((_, idx) => idx !== hifiDeleteTargetIndex);
                                      setHifiItineraryActivities(updatedList);
                                      setHifiShowDeleteDrawer(false);
                                      setHifiDeleteTargetIndex(null);
                                    }}
                                    className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 py-1.5 rounded-lg flex items-center justify-center gap-1.5 font-extrabold cursor-pointer"
                                  >
                                    <Icons.Trash2 size={11} />
                                    <span>Delete Item</span>
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Verification / Validation footer */}
                    <div className="bg-[#FAF9F5] border border-stone-150 rounded-xl p-2.5 flex items-center justify-between text-[9px] text-stone-500 font-mono">
                      <span>Usability Validation Success Rate</span>
                      <span className="font-extrabold text-teal-700 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-100 uppercase">
                        {selectedIncident === 0 && "100% SUCCESS"}
                        {selectedIncident === 1 && "94% SUCCESS"}
                        {selectedIncident === 2 && "97% SUCCESS"}
                        {selectedIncident === 3 && "100% SUCCESS"}
                      </span>
                    </div>

                  </div>
                </div>
              )}

            </div>
          </div>
          )}

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

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            
            {/* Screen Mockup Box 1 */}
            <div className="col-span-1 md:col-span-2 bg-white border border-[#E9E5DE] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group ring-1 ring-black/5 hover:shadow-md transition-shadow duration-300">
              {/* iOS Mobile Simulator Frame */}
              <div className="relative bg-slate-950 p-2.5 rounded-t-2xl border-b border-slate-100">
                {/* iPhone Mockup Mock Screen */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-inner flex flex-col border border-slate-200 h-[495px]">
                  
                  {/* Phone Status Bar */}
                  <div className="bg-white px-5 pt-3 pb-2 flex justify-between items-center text-[10px] font-bold text-slate-800 select-none">
                    <span>9:41</span>
                    {/* Speaker/Camera Notch */}
                    <div className="w-16 h-4 bg-black rounded-full absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-slate-800 absolute right-4"></span>
                    </div>
                    <div className="flex items-center gap-1.5 z-10">
                      <Icons.Wifi size={10} className="text-slate-800" />
                      <Icons.Battery size={12} className="text-slate-800" />
                    </div>
                  </div>

                  {/* App Inner Content Header */}
                  <div className="px-4 pt-1.5 pb-2.5 bg-white border-b border-slate-100">
                    <h5 className="text-xl font-bold tracking-tight text-slate-900 font-display">
                      Discover
                    </h5>
                    
                    {/* Search Bar */}
                    <div className="mt-2 flex items-center gap-2 px-3 py-1.5 bg-[#F3F0EA] rounded-full text-slate-500 text-[11px]">
                      <Icons.Search size={12} className="text-slate-400 shrink-0" />
                      <input 
                        type="text" 
                        placeholder="Search destinations, places..." 
                        className="bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 w-full text-[11px]"
                        disabled
                      />
                    </div>

                    {/* Filter Chips list */}
                    <div className="mt-2.5 flex gap-1.5 overflow-x-auto pb-1 text-[10px] font-semibold scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                      {[
                        { id: 'All', label: 'All' },
                        { id: 'Friends', label: 'Friends Only' },
                        { id: 'Locals', label: 'Locals' },
                        { id: 'Hidden', label: 'Hidden Gems' }
                      ].map((chip) => (
                        <button
                          key={chip.id}
                          onClick={() => setSelectedFilter(chip.id)}
                          className={`px-3 py-1 rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                            selectedFilter === chip.id
                              ? 'bg-[#8F8165] text-white'
                              : 'bg-[#F3EFEC] text-slate-700 hover:bg-[#EAE5DF]'
                          }`}
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Feed post viewport (mockup container) */}
                  <div className="bg-[#FAF9F6] p-2.5 flex-1 overflow-y-auto flex flex-col gap-2.5 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                    {posts
                      .filter(post => {
                        if (selectedFilter === 'Friends') return post.badge === 'Friend';
                        if (selectedFilter === 'Locals') return post.badge === 'Local';
                        if (selectedFilter === 'Hidden') return post.isHiddenGem;
                        return true;
                      })
                      .map((post) => (
                        <div key={post.id} className="bg-white rounded-xl border border-[#ECE0CE]/50 p-2.5 space-y-2.5 shadow-sm">
                          
                          {/* User Profile Header */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <img
                                src={post.avatar}
                                alt={post.user}
                                className="w-7 h-7 rounded-full object-cover ring-1 ring-slate-100"
                              />
                              <div>
                                <div className="flex items-center gap-1">
                                  <span className="font-bold text-[11.5px] text-slate-800 leading-tight">{post.user}</span>
                                  <span className={`text-[8px] font-extrabold px-1 py-0.2 rounded border ${
                                    post.badge === 'Friend' 
                                      ? 'bg-blue-50 text-blue-600 border-blue-100' 
                                      : 'bg-amber-50 text-amber-600 border-amber-100'
                                  }`}>
                                    {post.badge}
                                  </span>
                                </div>
                                <div className="flex items-center gap-0.5 text-[9px] text-slate-400">
                                  <Icons.MapPin size={9} className="text-teal-600" />
                                  <span>{post.city}, {post.country}</span>
                                </div>
                              </div>
                            </div>
                            <span className="text-[9px] text-slate-400 font-medium">{post.daysAgo}</span>
                          </div>

                          {/* Main Post Image with Badges */}
                          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-slate-100 select-none">
                            <img
                              src={post.image}
                              alt={post.locationName}
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            {/* Top-Left Badge: Local Rec */}
                            {post.isLocalRec && (
                              <div className="absolute top-2 left-2 bg-[#10B981] text-white text-[8px] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded shadow-sm">
                                Local Rec
                              </div>
                            )}
                            {/* Top-Right Badge: Hidden Gem */}
                            {post.isHiddenGem && (
                              <div className="absolute top-2 right-2 bg-indigo-600 text-white text-[8px] font-bold tracking-wide uppercase px-1.5 py-0.5 rounded shadow-sm">
                                Hidden Gem
                              </div>
                            )}
                            {/* Bottom-Right Badge: Not Sponsored */}
                            {post.isNotSponsored && (
                              <div className="absolute bottom-2 right-2 bg-black/60 text-white text-[8px] font-semibold px-1.5 py-0.5 rounded backdrop-blur-[1px]">
                                Not Sponsored
                              </div>
                            )}
                          </div>

                          {/* Info & review snippet */}
                          <div className="space-y-1">
                            <div className="flex items-start justify-between">
                              <h6 className="font-extrabold text-[12px] text-slate-900 tracking-tight leading-tight">
                                {post.locationName}
                              </h6>
                              <div className="flex items-center gap-0.5 text-amber-500 font-bold text-[10px]">
                                <Icons.Star size={10} className="fill-amber-500 text-amber-500" />
                                <span>{post.rating}</span>
                              </div>
                            </div>

                            {/* Category & pricing tag */}
                            <div className="flex gap-1 items-center">
                              <span className="bg-slate-100 text-slate-600 text-[8px] font-semibold px-1.5 py-0.5 rounded">
                                {post.category}
                              </span>
                              <span className="text-[9px] text-[#8F8165] font-bold">
                                {post.priceRange}
                              </span>
                            </div>

                            {/* Metadata items list */}
                            <div className="flex flex-col gap-0.5 pt-1">
                              <div className="flex items-center gap-1 text-[9px] text-slate-500 font-medium">
                                <Icons.Users size={10} className="text-slate-400 shrink-0" />
                                <span>{post.crowdLevel}</span>
                              </div>
                              {post.bestTime && (
                                <div className="flex items-center gap-1 text-[9px] text-slate-500 font-medium">
                                  <Icons.Calendar size={10} className="text-slate-400 shrink-0" />
                                  <span>{post.bestTime}</span>
                                </div>
                              )}
                            </div>

                            {/* Review text snippet */}
                            <p className="text-[10px] text-slate-600 leading-normal font-normal pt-1.5 border-t border-slate-100/80">
                              {post.review}
                            </p>
                          </div>

                          {/* Interactive utility buttons */}
                          <div className="flex items-center justify-between pt-1 text-slate-500">
                            <button 
                              onClick={() => {
                                setPosts(posts.map(p => p.id === post.id 
                                  ? { ...p, isLiked: !p.isLiked, likeCount: p.isLiked ? p.likeCount - 1 : p.likeCount + 1 } 
                                  : p
                                ));
                              }}
                              className={`flex items-center gap-1 text-[9px] font-bold cursor-pointer transition-colors ${post.isLiked ? 'text-rose-500' : 'text-slate-500 hover:text-slate-800'}`}
                            >
                              <Icons.Heart size={12} className={post.isLiked ? 'fill-rose-500 text-rose-500' : ''} />
                              <span>{post.likeCount}</span>
                            </button>
                            <div className="flex items-center gap-2.5">
                              <button className="text-slate-400 hover:text-slate-600">
                                  <Icons.MessageSquare size={12} />
                              </button>
                              <button 
                                onClick={() => {
                                  setPosts(posts.map(p => p.id === post.id 
                                    ? { ...p, isSaved: !p.isSaved } 
                                    : p
                                  ));
                                }}
                                className={`cursor-pointer ${post.isSaved ? 'text-teal-600' : 'text-slate-400 hover:text-slate-600'}`}
                              >
                                <Icons.Bookmark size={12} className={post.isSaved ? 'fill-teal-600 text-teal-600' : ''} />
                              </button>
                            </div>
                          </div>

                        </div>
                      ))}
                  </div>

                  {/* Bottom Navigation tab bar */}
                  <div className="bg-white border-t border-slate-100 px-3.5 py-1.5 flex justify-between items-center text-slate-400 select-none z-10">
                    <div className="flex flex-col items-center gap-0.5 text-teal-600">
                      <Icons.Home size={12} className="stroke-[2.5]" />
                      <span className="text-[7.5px] font-bold">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.Search size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Explore</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.PlusCircle size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Post</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.Map size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Trips</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.User size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Profile</span>
                    </div>
                  </div>

                  {/* Simulated iOS Indicator */}
                  <div className="bg-white pb-1 pt-0.5 flex justify-center">
                    <div className="w-20 h-[3px] bg-slate-300 rounded-full" />
                  </div>

                </div>
              </div>
              <div className="p-5">
                <span className="text-[9px] uppercase font-bold tracking-wider text-teal-600 block mb-1">
                  Active Screen 1
                </span>
                <h4 className="font-bold text-sm text-[#1E2129]">
                  Main Feed
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  A social travel feed showing real-time, non-sponsored recommendations, reviews, and local experiences shared by trusted friends and verified locals.
                </p>
              </div>
            </div>

            {/* Screen Mockup Box 2 */}
            <div className="col-span-1 md:col-span-2 bg-white border border-[#E9E5DE] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group ring-1 ring-black/5 hover:shadow-md transition-shadow duration-300">
              {/* iOS Mobile Simulator Frame */}
              <div className="relative bg-slate-950 p-2.5 rounded-t-2xl border-b border-slate-100">
                {/* iPhone Mockup Mock Screen */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-inner flex flex-col border border-slate-200 h-[495px]">
                  
                  {/* Phone Status Bar */}
                  <div className="bg-white px-5 pt-3 pb-2 flex justify-between items-center text-[10px] font-bold text-slate-800 select-none">
                    <span>9:41</span>
                    {/* Speaker/Camera Notch */}
                    <div className="w-16 h-4 bg-black rounded-full absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-slate-800 absolute right-4"></span>
                    </div>
                    <div className="flex items-center gap-1.5 z-10">
                      <Icons.Wifi size={10} className="text-slate-800" />
                      <Icons.Battery size={12} className="text-slate-800" />
                    </div>
                  </div>

                  {/* App Header for Create Post */}
                  <div className="px-4 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between z-10">
                    <button 
                      onClick={() => {
                        setCreatePostStep(1);
                        setPostLocation('Tsukiji Outer Market');
                        setPostCity('Tokyo');
                        setPostCountry('Japan');
                        setPostReview('Incredible fresh sushi breakfast experience! The tuna was so fresh it melted in my mouth.');
                      }} 
                      className="text-slate-400 hover:text-slate-700 cursor-pointer p-0.5"
                      title="Reset Draft"
                    >
                      <Icons.RotateCcw size={13} />
                    </button>
                    <span className="font-extrabold text-[12px] text-slate-800 tracking-tight font-display">
                      Create Post
                    </span>
                    <button 
                      onClick={() => {
                        // Publish action! Prepend Caitlyn Widjaja's post to main feed
                        const newPost = {
                          id: Date.now(),
                          user: "Caitlyn Widjaja",
                          badge: "Friend",
                          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
                          city: postCity || "Tokyo",
                          country: postCountry || "Japan",
                          daysAgo: "Just now",
                          image: mockImageOptions[uploadedImageIndex],
                          locationName: postLocation || "Tsukiji Outer Market",
                          rating: postRating,
                          category: postCategory,
                          priceRange: postPriceRange,
                          crowdLevel: postCrowdLevel,
                          bestTime: postBestTime,
                          review: postReview || "Amazing experience!",
                          likeCount: 0,
                          isLiked: false,
                          isSaved: false,
                          isLocalRec: isLocalRecBadge,
                          isHiddenGem: isHiddenGemBadge,
                          isNotSponsored: true
                        };
                        setPosts([newPost, ...posts]);
                        setShowPublishSuccess(true);
                      }}
                      className="bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-[9px] px-3.5 py-1 rounded-lg transition-transform active:scale-95 cursor-pointer"
                    >
                      Post
                    </button>
                  </div>

                  {/* Built-in Swipe Step Progress Selector */}
                  <div className="bg-[#FAF9F6] px-3 py-1.5 border-b border-slate-100 flex items-center justify-between text-[10px] select-none text-slate-500 z-10">
                    <button 
                      onClick={() => setCreatePostStep(prev => Math.max(1, prev - 1))}
                      disabled={createPostStep === 1}
                      className="flex items-center gap-0.5 text-[#8F8165] font-bold disabled:opacity-30 disabled:text-slate-400 cursor-pointer text-[9.5px]"
                    >
                      <Icons.ChevronLeft size={11} /> Back
                    </button>
                    
                    {/* step dot tabs */}
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3].map((step) => (
                        <button
                          key={step}
                          onClick={() => setCreatePostStep(step)}
                          className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                            createPostStep === step 
                              ? 'bg-amber-600 w-3.5' 
                              : 'bg-slate-200 hover:bg-slate-350'
                          }`}
                          title={`Go to Step ${step}`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={() => setCreatePostStep(prev => Math.min(3, prev + 1))}
                      disabled={createPostStep === 3}
                      className="flex items-center gap-0.5 text-[#8F8165] font-bold disabled:opacity-30 disabled:text-slate-400 cursor-pointer text-[9.5px]"
                    >
                      Next <Icons.ChevronRight size={11} />
                    </button>
                  </div>

                  {/* Main Sliding Content Viewport */}
                  <div className="bg-white relative overflow-hidden flex-1 flex flex-col">
                    
                    {/* Success Overlay Portal */}
                    {showPublishSuccess && (
                      <div className="absolute inset-0 bg-white/98 z-20 flex flex-col items-center justify-center p-5 text-center transition-all duration-300">
                        <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-2 animate-bounce">
                          <Icons.CheckCircle size={20} className="text-emerald-500" />
                        </div>
                        <h6 className="font-extrabold text-xs text-slate-800 uppercase tracking-wide">Published!</h6>
                        <p className="text-[9.5px] text-slate-500 mt-1 max-w-[170px] leading-relaxed">
                          Your recommendations for <span className="font-bold text-slate-700">"{postLocation}"</span> are now live in Active Screen 1 (Main Feed).
                        </p>
                        <div className="mt-3.5 space-y-1.5 w-full max-w-[130px]">
                          <button 
                            onClick={() => setShowPublishSuccess(false)} 
                            className="w-full py-1 text-[9px] bg-slate-900 hover:bg-slate-850 text-white rounded-lg font-bold shadow-sm cursor-pointer transition-colors"
                          >
                            Dismiss
                          </button>
                          <button 
                            onClick={() => {
                              setShowPublishSuccess(false);
                              setCreatePostStep(1);
                              setPostLocation('Secret Tokyo Yakitori');
                              setPostCity('Tokyo');
                              setPostCountry('Japan');
                              setPostReview('Best yakitori in town! Try the roasted chicken skewers with local scallions and homemade sweet tare/sauce.');
                              setUploadedImageIndex(3);
                            }} 
                            className="w-full py-1 text-[9px] bg-[#FAF8F5] hover:bg-[#F0EDE6] text-slate-700 border border-[#E0DBCF] rounded-lg font-bold cursor-pointer transition-colors"
                          >
                            Create Another
                          </button>
                        </div>
                      </div>
                    )}

                    <div className="p-3 flex-1 overflow-y-auto scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                      <AnimatePresence mode="wait">
                        {createPostStep === 1 && (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 16 }}
                            transition={{ duration: 0.15 }}
                            className="space-y-3 text-left"
                          >
                            {/* Cover Photo Custom Field */}
                            <div>
                              <span className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                Cover Photo Selection (Swipable Options)
                              </span>
                              <div 
                                onClick={() => setUploadedImageIndex((uploadedImageIndex + 1) % mockImageOptions.length)}
                                className="relative aspect-[16/9] rounded-xl border border-dashed border-[#D2C8B5] bg-[#FAF8F5] flex flex-col items-center justify-center overflow-hidden cursor-pointer group hover:opacity-95 transition-all"
                                title="Click to rotate preset images"
                              >
                                <img 
                                  src={mockImageOptions[uploadedImageIndex]} 
                                  alt="Mock Preset Cover" 
                                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-300" 
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-2 text-center text-white">
                                  <Icons.Sparkles size={16} className="mb-0.5 text-amber-300 text-shadow" />
                                  <span className="text-[9.5px] font-extrabold tracking-tight">Tap photo to rotate options</span>
                                  <span className="text-[8px] text-slate-200 mt-0.5 font-mono">Photo {uploadedImageIndex + 1} of {mockImageOptions.length}</span>
                                </div>
                              </div>
                            </div>

                            {/* Location Name */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                Location Name
                              </label>
                              <div className="flex items-center gap-1.5 px-2 py-1.2 bg-[#FAF8F5] rounded-lg border border-[#ECE5D8] focus-within:border-[#8F8165]">
                                <Icons.MapPin size={11} className="text-[#8F8165] shrink-0" />
                                <input 
                                  type="text" 
                                  value={postLocation}
                                  onChange={(e) => setPostLocation(e.target.value)}
                                  placeholder="e.g., Tsukiji Outer Market" 
                                  className="bg-transparent border-none outline-none text-slate-800 text-[10.5px] w-full font-medium"
                                />
                              </div>
                            </div>

                            {/* City and Country side by side */}
                            <div className="grid grid-cols-2 gap-1.5">
                              <div>
                                <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                  City
                                </label>
                                <input 
                                  type="text" 
                                  value={postCity}
                                  onChange={(e) => setPostCity(e.target.value)}
                                  placeholder="e.g., Tokyo" 
                                  className="w-full px-2 py-1 bg-slate-50 rounded-lg border border-[#ECE5D8] text-slate-800 font-medium text-[10.5px] focus:outline-none focus:border-[#8F8165]"
                                />
                              </div>
                              <div>
                                <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                  Country
                                </label>
                                <input 
                                  type="text" 
                                  value={postCountry}
                                  onChange={(e) => setPostCountry(e.target.value)}
                                  placeholder="e.g., Japan" 
                                  className="w-full px-2 py-1 bg-slate-50 rounded-lg border border-[#ECE5D8] text-slate-800 font-medium text-[10.5px] focus:outline-none focus:border-[#8F8165]"
                                />
                              </div>
                            </div>

                            {/* Rating star selectors */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-0.5">
                                Star Rating
                              </label>
                              <div className="flex items-center gap-1 shrink-0">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <button
                                    key={star}
                                    type="button"
                                    onClick={() => setPostRating(star)}
                                    className="cursor-pointer text-[#8F8165] hover:scale-105 transition-transform"
                                    title={`Rate ${star} Stars`}
                                  >
                                    <Icons.Star 
                                      size={15} 
                                      className={star <= postRating ? 'fill-amber-500 text-amber-500' : 'text-slate-300'} 
                                    />
                                  </button>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {createPostStep === 2 && (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 16 }}
                            transition={{ duration: 0.15 }}
                            className="space-y-3 text-left"
                          >
                            {/* Price Range Button Pickers */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                Price Range Estimate
                              </label>
                              <div className="grid grid-cols-4 gap-1">
                                {['$', '$$', '$$$', '$$$$'].map((price) => (
                                  <button
                                    key={price}
                                    type="button"
                                    onClick={() => setPostPriceRange(price)}
                                    className={`py-0.8 rounded-lg text-[9.5px] font-extrabold border transition-all cursor-pointer ${
                                      postPriceRange === price 
                                        ? 'border-[#8F8165] bg-[#FAF8F5] text-[#8F8165]' 
                                        : 'border-[#ECE5D8] bg-white text-slate-600 hover:bg-slate-50'
                                    }`}
                                  >
                                    {price}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Category dropdown preset toggler */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                Category Selection
                              </label>
                              <button
                                type="button"
                                onClick={() => {
                                  const cats = ['Restaurant', 'Cafe', 'Sightseeing', 'Food Stall'];
                                  const idx = (cats.indexOf(postCategory) + 1) % cats.length;
                                  setPostCategory(cats[idx]);
                                }}
                                className="w-full flex items-center justify-between px-2.5 py-1.2 bg-[#FAF8F5] rounded-lg border border-[#ECE5D8] text-[10px] font-bold text-slate-700 cursor-pointer text-left hover:bg-[#F2EFE8]"
                              >
                                <div className="flex items-center gap-1.5">
                                  <Icons.Tag size={10} className="text-[#8F8165]" />
                                  <span>{postCategory}</span>
                                </div>
                                <Icons.ChevronDown size={10} className="text-slate-450" />
                              </button>
                            </div>

                            {/* Crowd Level Selector cards */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                Audience / Crowd Density
                              </label>
                              <div className="grid grid-cols-3 gap-1">
                                {[
                                  { id: 'Quiet', label: 'Quiet', desc: 'No waits' },
                                  { id: 'Moderate', label: 'Moderate', desc: 'Short lines' },
                                  { id: 'Busy', label: 'Busy', desc: 'Sells out' }
                                ].map((crowd) => (
                                  <button
                                    key={crowd.id}
                                    type="button"
                                    onClick={() => setPostCrowdLevel(crowd.id)}
                                    className={`py-1 rounded-lg flex flex-col items-center justify-center border text-center transition-all cursor-pointer ${
                                      postCrowdLevel === crowd.id 
                                        ? 'border-[#8F8165] bg-[#FAF8F5] text-[#8F8165] font-extrabold' 
                                        : 'border-[#ECE5D8] bg-white text-slate-650'
                                    }`}
                                  >
                                    <span className="text-[8.5px] font-bold leading-tight">{crowd.label}</span>
                                    <span className="text-[7px] text-slate-400">{crowd.desc}</span>
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Best Time to Visit */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                Recommended Time to Visit
                              </label>
                              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-50 rounded-lg border border-[#ECE5D8] focus-within:border-[#8F8165]">
                                <Icons.Clock size={10} className="text-slate-400 shrink-0" />
                                <input 
                                  type="text" 
                                  value={postBestTime}
                                  onChange={(e) => setPostBestTime(e.target.value)}
                                  placeholder="e.g., Early morning (6-8am)" 
                                  className="bg-transparent border-none outline-none text-slate-800 text-[10.5px] w-full font-medium"
                                />
                              </div>
                            </div>

                            {/* Review content area */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                Quick Review Snippet
                              </label>
                              <textarea
                                value={postReview}
                                onChange={(e) => setPostReview(e.target.value)}
                                placeholder="What did you think of the place?"
                                className="w-full p-2 bg-slate-50 rounded-lg border border-[#ECE5D8] text-slate-800 text-[10px] font-medium min-h-[45px] max-h-[60px] focus:outline-none resize-none"
                              />
                            </div>
                          </motion.div>
                        )}

                        {createPostStep === 3 && (
                          <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 16 }}
                            transition={{ duration: 0.15 }}
                            className="space-y-3 text-left"
                          >
                            {/* Draft Status Bar */}
                            <div className="bg-[#E8F5E9] p-1.5 rounded-lg border border-[#C8E6C9] flex items-center justify-between text-[9px] z-10">
                              <span className="font-extrabold text-[#2E7D32]">Walkthrough Complete</span>
                              <span className="text-[#2E7D32] font-mono font-extrabold flex items-center gap-0.5">
                                Ready to Send
                              </span>
                            </div>

                            {/* Insider Tip (Optional) */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                Insider Tip (Optional)
                              </label>
                              <textarea
                                value={postInsiderTip}
                                onChange={(e) => setPostInsiderTip(e.target.value)}
                                placeholder="Share a secret tip (e.g. sit at counter, order the spec...)"
                                className="w-full p-2 bg-slate-50 rounded-lg border border-[#ECE5D8] text-slate-800 text-[10px] font-medium min-h-[40px] max-h-[50px] focus:outline-none resize-none"
                              />
                            </div>

                            {/* Special Badges custom blocks */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                Quality Labels / Badges
                              </label>
                              <div className="space-y-1">
                                <button
                                  type="button"
                                  onClick={() => setIsLocalRecBadge(!isLocalRecBadge)}
                                  className="w-full flex items-center justify-between px-2.5 py-1.2 bg-slate-50 rounded-lg border border-[#ECE5D8] cursor-pointer text-left text-xs"
                                >
                                  <span className="text-[10px] font-bold text-slate-700">Local Recommendation</span>
                                  <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                                    isLocalRecBadge ? 'bg-[#10B981] border-[#10B981] text-white' : 'border-slate-300'
                                  }`}>
                                    {isLocalRecBadge && <Icons.Check size={9} className="stroke-[3.5]" />}
                                  </div>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => setIsHiddenGemBadge(!isHiddenGemBadge)}
                                  className="w-full flex items-center justify-between px-2.5 py-1.2 bg-slate-50 rounded-lg border border-[#ECE5D8] cursor-pointer text-left text-xs"
                                >
                                  <span className="text-[10px] font-bold text-slate-700">Hidden Gem Badge</span>
                                  <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
                                    isHiddenGemBadge ? 'bg-indigo-600 border-[#4F46E5] text-white' : 'border-slate-300'
                                  }`}>
                                    {isHiddenGemBadge && <Icons.Check size={9} className="stroke-[3.5]" />}
                                  </div>
                                </button>
                              </div>
                            </div>

                            {/* Visibility level select buttons */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-wide mb-1">
                                Post Visibility
                              </label>
                              <div className="grid grid-cols-2 gap-1">
                                {['Public', 'Friends Only'].map((vis) => (
                                  <button
                                    key={vis}
                                    type="button"
                                    onClick={() => setPostVisibility(vis)}
                                    className={`py-1 rounded-lg text-[9px] font-extrabold border transition-all cursor-pointer text-center ${
                                      postVisibility === vis 
                                        ? 'border-[#8F8165] bg-[#FAF8F5] text-[#8F8165]' 
                                        : 'border-[#ECE5D8] bg-white text-slate-600'
                                    }`}
                                  >
                                    {vis}
                                  </button>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                  </div>

                  {/* Bottom Navigation tab bar */}
                  <div className="bg-white border-t border-slate-100 px-3.5 py-1.5 flex justify-between items-center text-slate-400 select-none z-10">
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.Home size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.Search size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Explore</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-amber-600">
                      <Icons.PlusCircle size={12} className="stroke-[2.5]" />
                      <span className="text-[7.5px] font-bold">Post</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.Map size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Trips</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.User size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Profile</span>
                    </div>
                  </div>

                  {/* Simulated iOS Indicator */}
                  <div className="bg-white pb-1 pt-0.5 flex justify-center">
                    <div className="w-20 h-[3px] bg-slate-200 rounded-full" />
                  </div>

                </div>
              </div>
              <div className="p-5">
                <span className="text-[9px] uppercase font-bold tracking-wider text-amber-600 block mb-1">
                  Active Screen 2
                </span>
                <h4 className="font-bold text-sm text-[#1E2129]">
                  Create Post
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  A dynamic swipable walk-through prototype where users can view premium photos, choose ratings, select categories, input hidden details, set badges, and post immediately.
                </p>
              </div>
            </div>

            {/* Screen Mockup Box 3 */}
            <div className="col-span-1 md:col-span-2 bg-white border border-[#E9E5DE] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group ring-1 ring-black/5 hover:shadow-md transition-shadow duration-300">
              {/* iOS Mobile Simulator Frame */}
              <div className="relative bg-slate-950 p-2.5 rounded-t-2xl border-b border-slate-100">
                {/* iPhone Mockup Mock Screen */}
                <div className="relative bg-[#FAF9F6] rounded-xl overflow-hidden shadow-inner flex flex-col border border-slate-200 h-[495px]">
                  
                  {/* Phone Status Bar */}
                  <div className="bg-[#FAF9F6] px-5 pt-3 pb-2 flex justify-between items-center text-[10px] font-bold text-slate-800 select-none">
                    <span>9:41</span>
                    {/* Speaker/Camera Notch */}
                    <div className="w-16 h-4 bg-black rounded-full absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-slate-800 absolute right-4"></span>
                    </div>
                    <div className="flex items-center gap-1.5 z-10">
                      <Icons.Wifi size={10} className="text-slate-800" />
                      <Icons.Battery size={12} className="text-slate-800" />
                    </div>
                  </div>

                  {/* High Quality Styled App View */}
                  <div className="px-4 pt-3 pb-2 flex items-center justify-between select-none bg-[#FAF9F6]">
                    <h3 className="font-extrabold text-[18px] text-slate-800 tracking-tight font-display">
                      My Itineraries
                    </h3>
                    
                    {/* Interactive tan color action '+' button exactly like screenshot */}
                    <button 
                      onClick={() => setShowCreateItinerary(true)}
                      className="w-7 h-7 bg-[#8F785C] hover:bg-[#7D664A] text-white rounded-lg flex items-center justify-center transition-transform active:scale-90 cursor-pointer shadow-sm"
                      title="Create Itinerary"
                    >
                      <Icons.Plus size={15} className="stroke-[3]" />
                    </button>
                  </div>

                  {/* Horizontally Scrollable / Tab Bar Picker */}
                  <div className="px-3.5 py-1.5 bg-[#FAF9F6] border-b border-dashed border-[#E7E2D8] flex items-center gap-1.5">
                    {(['My Trips', 'Shared With Me', 'Saved'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setItineraryTab(tab);
                          setShowCreateItinerary(false);
                        }}
                        className={`px-3 py-1.5 rounded-lg text-[10.5px] font-bold transition-all shrink-0 cursor-pointer ${
                          itineraryTab === tab
                            ? 'bg-[#8F785C] text-white shadow-sm'
                            : 'bg-[#EDE7DC] text-[#1E2129] hover:bg-[#E3DCCE]'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  {/* Main Scrollable Lists Area */}
                  <div className="flex-1 overflow-y-auto p-3.5 relative bg-[#FAF9F6] scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                    
                    {/* Floating Toast Notification system inside phone mockup */}
                    <AnimatePresence>
                      {showItineraryToast && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-2 left-2 right-2 bg-[#1E2129] text-white text-[9px] font-bold px-2.5 py-2 rounded-lg shadow-lg z-30 flex items-center gap-1.5 border border-white/10"
                        >
                          <Icons.Sparkles size={11} className="text-amber-300 shrink-0 animate-pulse" />
                          <span className="flex-1">{showItineraryToast}</span>
                          <button 
                            onClick={() => setShowItineraryToast('')}
                            className="text-slate-400 hover:text-white px-0.5"
                          >
                            ×
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Popover Card Overlay for Creating an Itinerary */}
                    <AnimatePresence>
                      {showCreateItinerary && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95, y: 15 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95, y: 15 }}
                          className="absolute inset-0 bg-[#FAF9F6] z-20 flex flex-col p-3.5 rounded-xl border border-[#ECE0CE] shadow-xl overflow-y-auto scrollbar-none"
                        >
                          <div className="flex items-center justify-between border-b border-[#ECE0CE] pb-2 mb-3">
                            <span className="font-extrabold text-[11.5px] text-slate-800 uppercase tracking-wider">
                              New Plan Setup
                            </span>
                            <button 
                              onClick={() => setShowCreateItinerary(false)}
                              className="text-slate-400 hover:text-slate-700 cursor-pointer font-bold text-xs"
                            >
                              Cancel
                            </button>
                          </div>

                          <div className="space-y-3.5 text-left flex-1">
                            {/* Title entry */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-widest mb-1">
                                Travel Title
                              </label>
                              <input 
                                type="text"
                                value={newItineraryTitle}
                                onChange={(e) => setNewItineraryTitle(e.target.value)}
                                className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-[#ECE5D8] text-slate-800 font-bold text-[11px] focus:outline-none focus:border-[#8F785C]"
                                placeholder="e.g., Kyoto Explorer"
                              />
                            </div>

                            {/* Location Destination */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-widest mb-1">
                                Location / Region
                              </label>
                              <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white rounded-lg border border-[#ECE5D8] focus-within:border-[#8F785C]">
                                <Icons.MapPin size={11} className="text-[#8F785C]" />
                                <input 
                                  type="text"
                                  value={newItineraryLocation}
                                  onChange={(e) => setNewItineraryLocation(e.target.value)}
                                  className="bg-transparent border-none outline-none text-[#1E2129] font-bold text-[11px] w-full"
                                  placeholder="e.g., Kyoto, Japan"
                                />
                              </div>
                            </div>

                            {/* Date intervals */}
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-widest mb-1">
                                  Dates
                                </label>
                                <input 
                                  type="text"
                                  value={newItineraryDates}
                                  onChange={(e) => setNewItineraryDates(e.target.value)}
                                  className="w-full px-2 py-1.2 bg-white rounded-lg border border-[#ECE5D8] text-slate-700 font-semibold text-[10px]"
                                />
                              </div>
                              <div>
                                <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-widest mb-1">
                                  Duration
                                </label>
                                <input 
                                  type="text"
                                  value={newItineraryDuration}
                                  onChange={(e) => setNewItineraryDuration(e.target.value)}
                                  className="w-full px-2 py-1.2 bg-white rounded-lg border border-[#ECE5D8] text-slate-700 font-semibold text-[10px]"
                                />
                              </div>
                            </div>

                            {/* Image Option cover selecting */}
                            <div>
                              <label className="block font-bold text-[9px] text-slate-400 uppercase tracking-widest mb-1">
                                Cover Picture (Interactive Selector)
                              </label>
                              <div className="grid grid-cols-4 gap-1.5">
                                {itineraryImageOptions.map((imgUrl, idx) => (
                                  <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setNewItineraryImageIndex(idx)}
                                    className={`relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer transition-all ${
                                      newItineraryImageIndex === idx 
                                        ? 'border-[#8F785C] scale-95 shadow-sm' 
                                        : 'border-transparent opacity-65 hover:opacity-100'
                                    }`}
                                  >
                                    <img 
                                      src={imgUrl} 
                                      alt="" 
                                      className="w-full h-full object-cover" 
                                      referrerPolicy="no-referrer"
                                    />
                                    {newItineraryImageIndex === idx && (
                                      <div className="absolute inset-0 bg-[#8F785C]/20 flex items-center justify-center">
                                        <Icons.Check size={10} className="text-white bg-[#8F785C] rounded-full p-0.5" />
                                      </div>
                                    )}
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* Create Button */}
                            <div className="pt-2">
                              <button
                                type="button"
                                onClick={() => {
                                  if (!newItineraryTitle.trim()) return;
                                  
                                  const newItem = {
                                    id: `custom-${Date.now()}`,
                                    title: newItineraryTitle,
                                    location: newItineraryLocation || "Tokyo, Japan",
                                    date: newItineraryDates || "Jun 14 - Jun 19, 2026",
                                    duration: newItineraryDuration || "1 days",
                                    author: "Sarah Chen",
                                    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
                                    image: itineraryImageOptions[newItineraryImageIndex],
                                    isShared: false
                                  };
                                  
                                  setItineraries({
                                    ...itineraries,
                                    'My Trips': [newItem, ...itineraries['My Trips']]
                                  });
                                  
                                  setItineraryTab('My Trips');
                                  setShowCreateItinerary(false);
                                  
                                  // Show a sweet toast
                                  setShowItineraryToast(`"${newItineraryTitle}" Plan Added to My Trips!`);
                                  setTimeout(() => setShowItineraryToast(''), 4000);
                                }}
                                className="w-full bg-[#8F785C] hover:bg-[#7D664A] text-white font-extrabold text-[10px] py-2 rounded-lg transition-transform active:scale-98 shadow-md cursor-pointer"
                              >
                                Save &amp; Generate Itinerary
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Itinerary Cards Lists */}
                    <div className="space-y-3.5">
                      {itineraries[itineraryTab].length === 0 ? (
                        <div className="py-12 text-center text-slate-400 text-[11px] font-medium">
                          No plans listed in {itineraryTab}.
                          <button 
                            onClick={() => setShowCreateItinerary(true)} 
                            className="block mx-auto mt-2 text-[#8F785C] font-extrabold underline cursor-pointer"
                          >
                            Add Your First Plan
                          </button>
                        </div>
                      ) : (
                        itineraries[itineraryTab].map((itinerary) => (
                          <div 
                            key={itinerary.id} 
                            className="bg-white rounded-xl border border-[#ECE0CE]/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
                          >
                            {/* Itinerary Core Image Banner */}
                            <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden select-none">
                              <img 
                                src={itinerary.image} 
                                alt={itinerary.title}
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              {/* Dark gradient shadow bottom exact fit */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3" />
                              
                              {/* Text positioned carefully inside card visual */}
                              <div className="absolute bottom-2 left-3 text-white">
                                <h4 className="font-extrabold text-[14px] leading-tight text-shadow-sm font-display">
                                  {itinerary.title}
                                </h4>
                                <div className="flex items-center gap-0.5 text-[9px] text-slate-200 mt-0.5 font-medium">
                                  <Icons.MapPin size={9} className="text-amber-400" />
                                  <span>{itinerary.location}</span>
                                </div>
                              </div>

                              {/* Special badges e.g. "Shared" in upper right */}
                              {itinerary.isShared && (
                                <div className="absolute top-2.5 right-2.5 bg-blue-600 text-white text-[8px] font-extrabold tracking-wide uppercase px-2 py-0.5 rounded shadow-sm">
                                  Shared
                                </div>
                              )}
                            </div>

                            {/* Details bar underneath block exactly matching mockup */}
                            <div className="p-3 bg-white space-y-2">
                              {/* Dates and duration row */}
                              <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-bold border-b border-[#FAF9F6] pb-2">
                                <Icons.Calendar size={11} className="text-slate-450" />
                                <span>{itinerary.date}</span>
                                <span className="text-slate-300">•</span>
                                <span className="text-[#8F785C]">{itinerary.duration}</span>
                              </div>

                              {/* Author and utilities action row */}
                              <div className="flex items-center justify-between text-slate-500 pt-0.5">
                                <div className="flex items-center gap-1.5">
                                  <img 
                                    src={itinerary.avatar} 
                                    alt={itinerary.author}
                                    className="w-5 h-5 rounded-full object-cover ring-1 ring-slate-100"
                                  />
                                  <span className="text-[10px] text-slate-600 font-medium">
                                    by <span className="font-bold text-slate-800">{itinerary.author}</span>
                                  </span>
                                </div>

                                {/* Dynamic action buttons */}
                                <div className="flex items-center gap-2">
                                  {/* Duplicate copy action for Shared itineraries */}
                                  {itineraryTab === 'Shared With Me' && (
                                    <button 
                                      onClick={() => {
                                        // Clone card into "My Trips" database state
                                        const clonedItem = {
                                          ...itinerary,
                                          id: `cloned-${Date.now()}`,
                                          isShared: false,
                                          author: "Caitlyn Widjaja (Me)",
                                          avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
                                        };
                                        
                                        setItineraries({
                                          ...itineraries,
                                          'My Trips': [clonedItem, ...itineraries['My Trips']]
                                        });
                                        
                                        setShowItineraryToast(`Saved "${itinerary.title}" to My Trips!`);
                                        setTimeout(() => setShowItineraryToast(''), 4000);
                                      }}
                                      className="p-1 text-slate-400 hover:text-[#8F785C] transition-colors cursor-pointer"
                                      title="Copy to My Trips"
                                    >
                                      <Icons.Copy size={12.5} />
                                    </button>
                                  )}

                                  {/* Share itinerary link */}
                                  <button 
                                    onClick={() => {
                                      setShowItineraryToast(`Sharing link copied! Dynamic token generated.`);
                                      setTimeout(() => setShowItineraryToast(''), 4000);
                                    }}
                                    className="p-1 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
                                    title="Share with Others"
                                  >
                                    <Icons.Share2 size={12.5} />
                                  </button>

                                  {/* Optional Delete action for customized lists */}
                                  {itinerary.id.startsWith('custom-') || itinerary.id.startsWith('cloned-') ? (
                                    <button 
                                      onClick={() => {
                                        const filtered = itineraries[itineraryTab].filter(item => item.id !== itinerary.id);
                                        setItineraries({
                                          ...itineraries,
                                          [itineraryTab]: filtered
                                        });
                                        setShowItineraryToast(`"${itinerary.title}" plan deleted.`);
                                        setTimeout(() => setShowItineraryToast(''), 3000);
                                      }}
                                      className="p-1 text-[#F43F5E]/60 hover:text-rose-600 transition-colors cursor-pointer"
                                      title="Delete Draft"
                                    >
                                      <Icons.Trash2 size={12.5} />
                                    </button>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                  </div>

                  {/* Bottom Navigation tab bar */}
                  <div className="bg-white border-t border-slate-100 px-3.5 py-1.5 flex justify-between items-center text-slate-400 select-none z-10">
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.Home size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.Search size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Explore</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.PlusCircle size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Post</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-amber-600">
                      <Icons.Map size={12} className="stroke-[2.5]" />
                      <span className="text-[7.5px] font-bold">Trips</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.User size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Profile</span>
                    </div>
                  </div>

                  {/* Simulated iOS Indicator */}
                  <div className="bg-white pb-1 pt-0.5 flex justify-center">
                    <div className="w-20 h-[3px] bg-slate-200 rounded-full" />
                  </div>

                </div>
              </div>
              <div className="p-5 text-left">
                <span className="text-[9px] uppercase font-bold tracking-wider text-rose-600 block mb-1">
                  Active Screen 3
                </span>
                <h4 className="font-extrabold text-sm text-[#1E2129]">
                  Share and Create Itineraries
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  A high-fidelity planner module showcasing private trips, shared travels with duplicate/copy features, customizable templates, and instant clipboard token generator to simplify social itinerary drafting.
                </p>
              </div>
            </div>

            {/* Screen Mockup Box 4: Explore */}
            <div className="col-span-1 md:col-span-2 md:col-start-2 bg-white border border-[#E9E5DE] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group ring-1 ring-black/5 hover:shadow-md transition-shadow duration-300">
              {/* iOS Mobile Simulator Frame */}
              <div className="relative bg-slate-950 p-2.5 rounded-t-2xl border-b border-slate-100">
                {/* iPhone Mockup Mock Screen */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-inner flex flex-col border border-slate-200 h-[495px]">
                  
                  {/* Phone Status Bar */}
                  <div className="bg-white px-5 pt-3 pb-2 flex justify-between items-center text-[10px] font-bold text-slate-800 select-none">
                    <span>9:41</span>
                    {/* Speaker/Camera Notch */}
                    <div className="w-16 h-4 bg-black rounded-full absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-slate-800 absolute right-4"></span>
                    </div>
                    <div className="flex items-center gap-1.5 z-10">
                      <Icons.Wifi size={10} className="text-slate-800" />
                      <Icons.Battery size={12} className="text-slate-800" />
                    </div>
                  </div>

                  {/* Header "Explore" */}
                  <div className="px-5 pt-3 pb-2 text-left bg-white select-none">
                    <h3 className="font-extrabold text-[24px] text-zinc-900 tracking-tight leading-none font-display">
                      Explore
                    </h3>
                  </div>

                  {/* Search Bar Input */}
                  <div className="px-5 pb-3.5 bg-white">
                    <div className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#F2ECE4] rounded-2xl text-stone-600 text-[11px] border border-transparent focus-within:border-stone-400 focus-within:bg-white transition-all duration-200 shadow-inner">
                      <Icons.Search size={14} className="text-stone-500 shrink-0" />
                      <input 
                        type="text" 
                        value={exploreSearch}
                        onChange={(e) => setExploreSearch(e.target.value)}
                        placeholder="Search destinations, places..." 
                        className="bg-transparent border-none outline-none text-zinc-900 placeholder-stone-500 w-full text-[11px] font-medium"
                      />
                      {exploreSearch && (
                        <button 
                          onClick={() => setExploreSearch('')}
                          className="text-stone-400 hover:text-stone-600"
                        >
                          <Icons.X size={11} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Filters Header Section */}
                  <div className="px-5 py-1 flex justify-between items-center bg-white select-none shrink-0">
                    <span className="font-extrabold text-[12px] text-zinc-900 uppercase tracking-wider">Filters</span>
                    {(exploreSearch || friendsOnlyFilter || localsFilter) && (
                      <button 
                        onClick={() => {
                          setExploreSearch('');
                          setFriendsOnlyFilter(false);
                          setLocalsFilter(false);
                        }}
                        className="text-[10.5px] font-bold text-[#8F785C] hover:text-[#7A644A] transition-colors cursor-pointer"
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  {/* Horizontal scrollable Filter Pill Row */}
                  <div className="px-5 py-2 bg-white flex items-center gap-1.5 overflow-x-auto scrollbar-none shrink-0" style={{ scrollbarWidth: 'none' }}>
                    <button
                      onClick={() => {
                        // All Filters toggles a quick helpful notice toast
                        setProfileToast("Showing all system filter options.");
                        setTimeout(() => setProfileToast(''), 2500);
                      }}
                      className="px-3 py-1.8 bg-white border border-[#EDE8DF] rounded-xl text-[10px] font-extrabold flex items-center gap-1 shrink-0 shadow-sm active:scale-95 transition-all text-[#1E2129]"
                    >
                      <Icons.SlidersHorizontal size={11} className="text-stone-500" />
                      <span>All Filters</span>
                    </button>

                    <button
                      onClick={() => setFriendsOnlyFilter(!friendsOnlyFilter)}
                      className={`px-3.5 py-1.8 border rounded-xl text-[10px] font-extrabold transition-all shrink-0 active:scale-95 ${
                        friendsOnlyFilter 
                          ? 'bg-[#1E2129] text-white border-transparent shadow-sm' 
                          : 'bg-white text-[#1E2129] border-[#EDE8DF] hover:bg-stone-50'
                      }`}
                    >
                      <span>Friends Only</span>
                    </button>

                    <button
                      onClick={() => setLocalsFilter(!localsFilter)}
                      className={`px-3.5 py-1.8 border rounded-xl text-[10px] font-extrabold transition-all shrink-0 active:scale-95 ${
                        localsFilter 
                          ? 'bg-[#1E2129] text-white border-transparent shadow-sm' 
                          : 'bg-white text-[#1E2129] border-[#EDE8DF] hover:bg-stone-50'
                      }`}
                    >
                      <span>Locals</span>
                    </button>
                  </div>

                  {/* Main Viewport scrollable area */}
                  <div className="flex-1 overflow-y-auto px-5 pb-4 bg-white text-left scrollbar-none" style={{ scrollbarWidth: 'none' }}>
                    
                    {/* Trending Destinations Header Block */}
                    <div className="pt-2 pb-2.5 flex items-center gap-2 select-none">
                      <Icons.TrendingUp size={14} className="text-zinc-650" />
                      <h4 className="font-extrabold text-[12.5px] text-zinc-900 tracking-tight uppercase tracking-wider">
                        Trending Destinations
                      </h4>
                    </div>

                    {/* 2x2 Grid and static custom locations cards matching screenshot */}
                    <div className="grid grid-cols-2 gap-3 pb-4">
                      
                      {/* Card 1: Tokyo */}
                      <button
                        onClick={() => {
                          setExploreSearch('Tokyo');
                          setProfileToast("Selected Tokyo! View updated.");
                          setTimeout(() => setProfileToast(''), 2500);
                        }}
                        className="group/tcard text-left rounded-2xl overflow-hidden relative aspect-[1/1.05] shadow-sm hover:shadow active:scale-98 transition-all border border-stone-100"
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&w=400&q=80" 
                          alt="Tokyo" 
                          className="absolute inset-0 w-full h-full object-cover group-hover/tcard:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        {/* Shadow Gradient from bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2/5">
                          <span className="text-[7.5px] font-extrabold uppercase tracking-widest text-[#E3DCCE] block">
                            📍 Japan
                          </span>
                          <h5 className="font-extrabold text-[12.5px] text-white tracking-tight leading-tight mt-0.2">
                            Tokyo
                          </h5>
                          <span className="text-[7px] text-stone-300 font-medium block mt-0.2">
                            1243 posts
                          </span>
                        </div>
                      </button>

                      {/* Card 2: Santorini */}
                      <button
                        onClick={() => {
                          setExploreSearch('Santorini');
                          setProfileToast("Selected Santorini! View updated.");
                          setTimeout(() => setProfileToast(''), 2500);
                        }}
                        className="group/tcard text-left rounded-2xl overflow-hidden relative aspect-[1/1.05] shadow-sm hover:shadow active:scale-98 transition-all border border-stone-100"
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=400&q=80" 
                          alt="Santorini" 
                          className="absolute inset-0 w-full h-full object-cover group-hover/tcard:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        {/* Shadow Gradient from bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2/5">
                          <span className="text-[7.5px] font-extrabold uppercase tracking-widest text-[#E3DCCE] block">
                            📍 Greece
                          </span>
                          <h5 className="font-extrabold text-[12.5px] text-white tracking-tight leading-tight mt-0.2">
                            Santorini
                          </h5>
                          <span className="text-[7px] text-stone-300 font-medium block mt-0.2">
                            856 posts
                          </span>
                        </div>
                      </button>

                      {/* Card 3: Paris */}
                      <button
                        onClick={() => {
                          setExploreSearch('Paris');
                          setProfileToast("Selected Paris! View updated.");
                          setTimeout(() => setProfileToast(''), 2500);
                        }}
                        className="group/tcard text-left rounded-2xl overflow-hidden relative aspect-[1/1.05] shadow-sm hover:shadow active:scale-98 transition-all border border-stone-100"
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80" 
                          alt="Paris" 
                          className="absolute inset-0 w-full h-full object-cover group-hover/tcard:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        {/* Shadow Gradient from bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2/5">
                          <span className="text-[7.5px] font-extrabold uppercase tracking-widest text-[#E3DCCE] block">
                            📍 France
                          </span>
                          <h5 className="font-extrabold text-[12.5px] text-white tracking-tight leading-tight mt-0.2">
                            Paris
                          </h5>
                          <span className="text-[7px] text-stone-300 font-medium block mt-0.2">
                            2104 posts
                          </span>
                        </div>
                      </button>

                      {/* Card 4: Bali */}
                      <button
                        onClick={() => {
                          setExploreSearch('Bali');
                          setProfileToast("Selected Bali! View updated.");
                          setTimeout(() => setProfileToast(''), 2500);
                        }}
                        className="group/tcard text-left rounded-2xl overflow-hidden relative aspect-[1/1.05] shadow-sm hover:shadow active:scale-98 transition-all border border-stone-100"
                      >
                        <img 
                          src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80" 
                          alt="Bali" 
                          className="absolute inset-0 w-full h-full object-cover group-hover/tcard:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        {/* Shadow Gradient from bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
                        <div className="absolute bottom-2.5 left-2.5 right-2/5">
                          <span className="text-[7.5px] font-extrabold uppercase tracking-widest text-[#E3DCCE] block">
                            📍 Indonesia
                          </span>
                          <h5 className="font-extrabold text-[12.5px] text-white tracking-tight leading-tight mt-0.2">
                            Bali
                          </h5>
                          <span className="text-[7px] text-stone-300 font-medium block mt-0.2">
                            1789 posts
                          </span>
                        </div>
                      </button>

                    </div>

                    {/* Browse by Category Header */}
                    <div className="pt-2 pb-2 flex items-center justify-between select-none">
                      <h4 className="font-extrabold text-[13px] text-zinc-900 tracking-tight uppercase tracking-wider">
                        Browse by Category
                      </h4>
                    </div>

                    {/* Grid of beautifully designed Category cards */}
                    <div className="grid grid-cols-2 gap-2 pb-2">
                      {[
                        { label: 'Cafes', desc: '42 local spots', emoji: '☕', class: 'bg-[#FAF8F5] border-[#ECE5D8] text-stone-800' },
                        { label: 'Restaurants', desc: '88 foodie haunts', emoji: '🍜', class: 'bg-[#FAF8F5] border-[#ECE5D8] text-stone-800' },
                        { label: 'Hidden Bars', desc: '15 vinyl lounges', emoji: '📻', class: 'bg-[#FAF8F5] border-[#ECE5D8] text-stone-800' },
                        { label: 'Scenic', desc: '24 sunset viewpoints', emoji: '🌅', class: 'bg-[#FAF8F5] border-[#ECE5D8] text-stone-800' },
                      ].map((cat, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setExploreSearch(cat.label);
                            setProfileToast(`Filtering category: ${cat.label}`);
                            setTimeout(() => setProfileToast(''), 2500);
                          }}
                          className={`p-2.5 rounded-xl border flex items-center gap-2 text-left hover:bg-stone-50 active:scale-97 transition-all ${cat.class}`}
                        >
                          <span className="text-[16px]">{cat.emoji}</span>
                          <div>
                            <span className="block font-bold text-[10.5px] text-zinc-805 leading-none">{cat.label}</span>
                            <span className="text-[8px] text-stone-450 mt-0.5 block leading-none font-medium">{cat.desc}</span>
                          </div>
                        </button>
                      ))}
                    </div>

                  </div>

                  {/* Bottom Navigation tab bar */}
                  <div className="bg-white border-t border-slate-100 px-3.5 py-1.5 flex justify-between items-center text-slate-450 select-none z-10">
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-800 cursor-pointer">
                      <Icons.Home size={12} className="stroke-[2.2]" />
                      <span className="text-[7.5px] font-medium text-stone-450">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-amber-700 font-bold">
                      <Icons.Search size={12} className="stroke-[2.5]" />
                      <span className="text-[7.5px] font-extrabold text-amber-800">Explore</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-800 cursor-pointer">
                      <Icons.PlusCircle size={12} className="stroke-[2.2]" />
                      <span className="text-[7.5px] font-medium text-stone-450">Post</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-800 cursor-pointer">
                      <Icons.Map size={12} className="stroke-[2.2]" />
                      <span className="text-[7.5px] font-medium text-stone-450">Trips</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-800 cursor-pointer">
                      <Icons.User size={12} className="stroke-[2.2]" />
                      <span className="text-[7.5px] font-medium text-stone-450">Profile</span>
                    </div>
                  </div>

                  {/* Simulated iOS Indicator */}
                  <div className="bg-white pb-1 pt-0.5 flex justify-center shrink-0">
                    <div className="w-20 h-[3px] bg-slate-200 rounded-full" />
                  </div>

                </div>
              </div>
              <div className="p-5 text-left">
                <span className="text-[9px] uppercase font-bold tracking-wider text-[#10B981] block mb-1">
                  Active Screen 4
                </span>
                <h4 className="font-extrabold text-sm text-[#1E2129]">
                  Explore
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  A high-fidelity mobile search hub, pairing live filter sliders like Friends Only & Locals with beautifully integrated trending cards for Tokyo, Santorini, Paris, and Bali.
                </p>
              </div>
            </div>

            {/* Screen Mockup Box 5: Profile */}
            <div className="col-span-1 md:col-span-2 md:col-start-4 bg-white border border-[#E9E5DE] rounded-2xl overflow-hidden shadow-sm flex flex-col justify-between group ring-1 ring-black/5 hover:shadow-md transition-shadow duration-300">
              {/* iOS Mobile Simulator Frame */}
              <div className="relative bg-slate-950 p-2.5 rounded-t-2xl border-b border-slate-100">
                {/* iPhone Mockup Mock Screen */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-inner flex flex-col border border-slate-200 h-[495px]">
                  
                  {/* Phone Status Bar */}
                  <div className="bg-white px-5 pt-3 pb-2 flex justify-between items-center text-[10px] font-bold text-slate-800 select-none">
                    <span>9:41</span>
                    {/* Speaker/Camera Notch */}
                    <div className="w-16 h-4 bg-black rounded-full absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-slate-800 absolute right-4"></span>
                    </div>
                    <div className="flex items-center gap-1.5 z-10">
                      <Icons.Wifi size={10} className="text-slate-800" />
                      <Icons.Battery size={12} className="text-slate-800" />
                    </div>
                  </div>

                  {/* Absolute Floating Toast Overlay */}
                  <AnimatePresence>
                    {profileToast && (
                      <motion.div 
                        key="profile-toast"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-[48px] left-3 right-3 bg-stone-900 border border-stone-800 text-white text-[8.5px] font-bold px-3 py-1.8 rounded-xl shadow-lg z-50 flex items-center gap-1.5"
                      >
                        <Icons.Sparkles size={11} className="text-amber-400 animate-pulse" />
                        <span className="flex-1">{profileToast}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Outer Main Scrollable Body */}
                  <div className="flex-1 overflow-y-auto scrollbar-none text-left relative bg-white" style={{ scrollbarWidth: 'none' }}>

                    {/* Profile Info Header Section */}
                    <div className="bg-white px-5 pt-4 pb-4 select-none shrink-0 border-b border-stone-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        {/* Profile Avatar */}
                        <div className="relative">
                          <img 
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
                            alt="Sarah Chen"
                            className="w-[58px] h-[58px] rounded-full object-cover border border-stone-200 shadow-sm"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Name & Username & Location */}
                        <div className="text-left">
                          <div className="flex items-center gap-1.5">
                            <h4 className="font-extrabold text-[15px] text-zinc-900 tracking-tight leading-none font-display">
                              Sarah Chen
                            </h4>
                          </div>
                          <span className="text-[9.5px] font-medium text-stone-500 block mt-0.5">@sarahexplores</span>
                          <div className="flex items-center gap-0.5 text-stone-500 mt-1">
                            <Icons.MapPin size={9.5} className="text-stone-400 shrink-0" />
                            <span className="text-[9.5px] font-medium">San Francisco, CA</span>
                          </div>
                        </div>
                      </div>

                      {/* Settings Gear Action */}
                      <button 
                        onClick={() => {
                          setProfileToast("Settings and configuration opened.");
                          setTimeout(() => setProfileToast(''), 3000);
                        }}
                        className="p-1.5 text-zinc-800 hover:text-stone-600 transition-colors bg-stone-50 hover:bg-stone-100 rounded-full cursor-pointer"
                        title="Profile Options"
                      >
                        <Icons.Settings size={15} />
                      </button>
                    </div>

                    {/* Bio Description Section */}
                    <div className="mt-3.5 text-left relative">
                      {isEditingBio ? (
                        <div className="space-y-1.5 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                          <textarea 
                            value={profileBio}
                            onChange={(e) => setProfileBio(e.target.value)}
                            className="w-full text-[10px] font-medium text-zinc-950 bg-white border border-stone-300 rounded-lg p-1.5 focus:outline-none min-h-[45px] resize-none leading-relaxed"
                          />
                          <div className="flex justify-end gap-1">
                            <button 
                              onClick={() => {
                                setIsEditingBio(false);
                                setProfileToast("Bio updated successfully!");
                                setTimeout(() => setProfileToast(''), 3000);
                              }}
                              className="px-2.5 py-0.8 bg-zinc-900 text-white rounded-lg font-bold text-[8.5px] cursor-pointer hover:bg-zinc-850"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="group/bio bg-stone-50/15 p-1 rounded-lg">
                          <p className="text-[10px] text-stone-650 font-medium leading-relaxed whitespace-pre-line pr-4">
                            {profileBio}
                          </p>
                          <button 
                            onClick={() => setIsEditingBio(true)}
                            className="absolute top-0 right-0 p-0.5 text-stone-400 hover:text-zinc-800 transition-colors cursor-pointer"
                            title="Edit Bio"
                          >
                            <Icons.Edit2 size={10} />
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Core stats block formatted in styled beige boxes */}
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      {/* Box 1: Posts */}
                      <div className="bg-[#FAF6F0] border border-[#ECE5DB]/65 rounded-xl py-2 px-1 text-center">
                        <span className="block font-black text-zinc-900 text-[13px] leading-tight">24</span>
                        <span className="text-[8px] tracking-wider uppercase font-extrabold text-stone-450 leading-none">Posts</span>
                      </div>
                      {/* Box 2: Countries */}
                      <div className="bg-[#FAF6F0] border border-[#ECE5DB]/65 rounded-xl py-2 px-1 text-center">
                        <span className="block font-black text-zinc-900 text-[13px] leading-tight">12</span>
                        <span className="text-[8px] tracking-wider uppercase font-extrabold text-stone-450 leading-none">Countries</span>
                      </div>
                      {/* Box 3: Friends */}
                      <button 
                        onClick={() => {
                          setFollowersCount(followersCount + 1);
                          setProfileToast("Simulated adding classmate to Friends!");
                          setTimeout(() => setProfileToast(''), 3000);
                        }}
                        className="bg-[#FAF6F0] border border-[#ECE5DB]/65 rounded-xl py-2 px-1 text-center active:scale-95 transition-all text-stone-850"
                      >
                        <span className="block font-black text-zinc-900 text-[13px] leading-tight">{followersCount}</span>
                        <span className="text-[8px] tracking-wider uppercase font-extrabold text-stone-450 leading-none block">Friends</span>
                      </button>
                    </div>

                    {/* Button row: Edit Profile & Share Profile */}
                    <div className="grid grid-cols-2 gap-2 mt-3.5">
                      <button 
                        onClick={() => setIsEditingBio(!isEditingBio)}
                        className="bg-[#8A7052] hover:bg-[#786146] text-white text-[11px] font-extrabold rounded-xl py-2 shadow-sm transition-all text-center cursor-pointer active:scale-98"
                      >
                        Edit Profile
                      </button>
                      <button 
                        onClick={() => {
                          setProfileToast("Profile link generated and copied to clipboard!");
                          setTimeout(() => setProfileToast(''), 3000);
                        }}
                        className="bg-white border border-[#EDE8DF] hover:bg-stone-50 text-stone-800 text-[11px] font-extrabold rounded-xl py-2 shadow-sm transition-all text-center cursor-pointer active:scale-98"
                      >
                        Share Profile
                      </button>
                    </div>

                  </div>

                  {/* Sub Tab View Selectors (matching the beautiful highlighted style) */}
                  <div className="bg-white border-b border-stone-150 flex items-center justify-around shrink-0 sticky top-0 px-3 select-none z-20 shadow-sm">
                    
                    {/* Tab 1: Posts */}
                    <button
                      onClick={() => setProfileActiveTab('Posts')}
                      className={`py-3 flex-1 text-center text-[11px] font-extrabold uppercase tracking-wider relative transition-all cursor-pointer ${
                        profileActiveTab === 'Posts'
                          ? 'text-[#8A7052]'
                          : 'text-stone-400 hover:text-stone-600'
                      }`}
                    >
                      <span className="relative z-10">Posts</span>
                      {profileActiveTab === 'Posts' && (
                        <motion.div 
                          layoutId="profileTabLine"
                          className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-[#8A7052]" 
                        />
                      )}
                    </button>

                    {/* Tab 2: Saved / Bookmark Icon */}
                    <button
                      onClick={() => setProfileActiveTab('Saved')}
                      className={`py-3 flex-1 text-center relative transition-all flex items-center justify-center cursor-pointer ${
                        profileActiveTab === 'Saved'
                          ? 'text-[#8A7052]'
                          : 'text-stone-400 hover:text-stone-650'
                      }`}
                      title="Bookmarks"
                    >
                      <Icons.Bookmark size={14} className={profileActiveTab === 'Saved' ? "fill-[#8A7052]/20" : ""} />
                      {profileActiveTab === 'Saved' && (
                        <motion.div 
                          layoutId="profileTabLine"
                          className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-[#8A7052]" 
                        />
                      )}
                    </button>

                    {/* Tab 3: Maps / Stats fold icon */}
                    <button
                      onClick={() => setProfileActiveTab('Stats')}
                      className={`py-3 flex-1 text-center relative transition-all flex items-center justify-center cursor-pointer ${
                        profileActiveTab === 'Stats'
                          ? 'text-[#8A7052]'
                          : 'text-stone-400 hover:text-stone-650'
                      }`}
                      title="Travel Statistics"
                    >
                      <Icons.Map size={14} />
                      {profileActiveTab === 'Stats' && (
                        <motion.div 
                          layoutId="profileTabLine"
                          className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-[#8A7052]" 
                        />
                      )}
                    </button>

                  </div>

                  {/* Scrollable listing tab area */}
                  <div className="p-4 text-left relative bg-white">

                    {/* Tab 1: Posts */}
                    {profileActiveTab === 'Posts' && (
                      <div className="space-y-3.5">
                        
                        {/* Sarah Chen High Fidelity Post Card matching screenshot exactly */}
                        <div className="border border-[#ECE5DB] bg-[#FAF8F5]/30 rounded-2xl overflow-hidden shadow-sm hover:shadow active:scale-[0.99] transition-all">
                          {/* Post Card Header */}
                          <div className="p-3 flex justify-between items-start">
                            <div className="flex items-center gap-2">
                              <img 
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" 
                                alt="Sarah Chen"
                                className="w-[28px] h-[28px] rounded-full object-cover shadow-inner"
                              />
                              <div className="text-left">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-extrabold text-[11px] text-zinc-900 leading-none">Sarah Chen</span>
                                  <span className="bg-[#EAF3FF] text-[#1A73E8] text-[7.5px] font-black px-1.5 py-0.2 rounded-full">
                                    Friend
                                  </span>
                                </div>
                                <div className="flex items-center gap-0.5 mt-0.5 text-stone-500">
                                  <Icons.MapPin size={7.5} className="text-amber-700 shrink-0" />
                                  <span className="text-[8px] font-medium leading-none">Tokyo, Japan</span>
                                </div>
                              </div>
                            </div>
                            <span className="text-[8px] text-stone-400 font-bold">2 days ago</span>
                          </div>

                          {/* Post Card Image */}
                          <div className="relative aspect-[16/10] bg-stone-150 overflow-hidden select-none">
                            <img 
                              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=650&q=80" 
                              alt="Ramen Spot Recommendation"
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                            {/* Local Rec Badge absolute on top-left of image */}
                            <div className="absolute top-2.5 left-2.5 bg-[#10B981] text-white text-[8px] font-black px-2 py-0.6 rounded-lg uppercase tracking-wider shadow">
                              Local Rec
                            </div>
                          </div>

                          {/* Post Card Body Detail */}
                          <div className="p-3 space-y-1 bg-white border-t border-stone-100">
                            <div className="flex justify-between items-center">
                              <h5 className="font-extrabold text-[11.5px] text-zinc-900 leading-tight">Yuzu Ramen Counter</h5>
                              <div className="flex items-center gap-0.5 text-amber-500 text-[9px] font-bold">
                                <Icons.Star size={9.5} className="fill-amber-400" />
                                <span>5.0</span>
                              </div>
                            </div>
                            <p className="text-[9px] text-[#4A453A] font-medium leading-relaxed">
                              Hands down the most flavorful yuzu ramen in Tokyo! Thin noodles paired with intense seafood/citrus infusion. Arrive 15 minutes before opening. 🍜
                            </p>
                          </div>
                        </div>

                        {/* Secondary dynamically fetched posts from Sarah Chen in global feed if any */}
                        {posts
                          .filter(p => p.user === 'Sarah Chen' && p.id !== 1) // skip fallback duplicate
                          .map(p => (
                            <div key={p.id} className="border border-[#ECE5DB] bg-white rounded-2xl overflow-hidden p-3 shadow-sm flex gap-3">
                              <img 
                                src={p.image} 
                                alt={p.locationName} 
                                className="w-14 h-14 object-cover rounded-xl bg-stone-100 select-none shrink-0"
                                referrerPolicy="no-referrer"
                              />
                              <div className="flex-1 min-w-0 flex flex-col justify-between text-left">
                                <div>
                                  <h6 className="font-black text-[11px] text-zinc-900 leading-tight truncate">{p.locationName}</h6>
                                  <span className="text-[8px] font-medium text-stone-500 block mt-0.2">{p.city}, {p.country}</span>
                                </div>
                                <div className="flex items-center justify-between text-[8px] font-bold text-stone-500 pt-1.5 border-t border-stone-50 mt-1">
                                  <span className="bg-[#FAF6F0] text-[#8A7052] px-1.5 py-0.2 rounded">{p.category}</span>
                                  <div className="flex items-center gap-0.5 text-amber-500">
                                    <Icons.Star size={8.5} className="fill-amber-400" />
                                    <span>{p.rating}.0</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}

                      </div>
                    )}

                    {/* Tab 2: Saved (Bookmark collections page) */}
                    {profileActiveTab === 'Saved' && (
                      <div className="space-y-4">
                        <div className="flex items-center gap-1.5 select-none shrink-0 pt-0.5 pb-1">
                          <Icons.Bookmark size={12} className="text-[#8A7052]" />
                          <span className="font-extrabold text-[11px] text-zinc-900 uppercase tracking-wider">Saved Boards</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2.5">
                          {[
                            { title: 'Kyoto Record Bars 📻', count: '4 spots', image: 'https://images.unsplash.com/photo-1542013936693-8848e574047e?auto=format&fit=crop&w=150&q=80' },
                            { title: 'Best Matcha Corners 🍵', count: '6 spots', image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=150&q=80' },
                            { title: 'Secret Venice Bridges ⛵️', count: '3 spots', image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=150&q=80' },
                            { title: 'Vintage Fleas Paris 🧥', count: '5 spots', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=150&q=80' }
                          ].map((bd, i) => (
                            <div 
                              key={i}
                              onClick={() => {
                                setProfileToast(`Opened "${bd.title}" array!`);
                                setTimeout(() => setProfileToast(''), 2500);
                              }}
                              className="group/board rounded-2xl overflow-hidden border border-[#ECE5DB] bg-[#FAF8F5]/30 p-2 text-left hover:shadow-md transition-all cursor-pointer h-[120px] flex flex-col justify-between"
                            >
                              <div className="aspect-[16/10] bg-stone-100 rounded-lg overflow-hidden relative">
                                <img src={bd.image} alt="Board banner" className="w-full h-full object-cover group-hover/board:scale-105 transition-transform duration-300" />
                                <div className="absolute top-1 right-1 bg-black/60 text-white font-mono text-[6.5px] px-1 py-0.2 rounded font-mono">
                                  {bd.count}
                                </div>
                              </div>
                              <div className="mt-1.5">
                                <span className="font-extrabold text-[9px] text-zinc-900 leading-tight block line-clamp-1 group-hover/board:text-[#8A7052] transition-colors">{bd.title}</span>
                                <span className="text-[7.5px] text-stone-400 font-extrabold uppercase mt-0.5 block">Shared Board</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Stats (Map/Fold Icon Countries Visited & Travel Stats) */}
                    {profileActiveTab === 'Stats' && (
                      <div className="space-y-4">
                        
                        {/* Section 1: Countries Visited Header */}
                        <div className="flex items-center gap-1.5 select-none shrink-0 pt-0.5">
                          <Icons.Compass size={13} className="text-[#8A7052]" />
                          <span className="font-extrabold text-[11px] text-zinc-900 uppercase tracking-wider">Countries Visited</span>
                        </div>

                        {/* Grid matching right screenshot */}
                        <div className="grid grid-cols-3 gap-2 pb-1 text-stone-850">
                          {[
                            { name: 'Japan', places: '8 places' },
                            { name: 'Greece', places: '5 places' },
                            { name: 'Italy', places: '6 places' },
                            { name: 'France', places: '4 places' },
                            { name: 'Thailand', places: '7 places' },
                            { name: 'Spain', places: '3 places' },
                          ].map((c, i) => (
                            <div 
                              key={i}
                              onClick={() => {
                                setProfileToast(`Showing detailed logs inside ${c.name}!`);
                                setTimeout(() => setProfileToast(''), 3000);
                              }}
                              className="bg-[#FAF8F5]/85 border border-[#ECE5DB] p-2.5 rounded-xl text-left select-none cursor-pointer hover:bg-stone-50 active:scale-97 transition-all flex flex-col justify-center min-h-[44px]"
                            >
                              <span className="block font-extrabold text-[10.5px] text-zinc-900 leading-tight">{c.name}</span>
                              <span className="text-[8px] text-stone-450 mt-0.5 leading-none block font-medium">{c.places}</span>
                            </div>
                          ))}
                        </div>

                        {/* Section 2: Travel Stats Header */}
                        <div className="flex items-center gap-1.5 select-none shrink-0 pt-1.5">
                          <span className="font-extrabold text-[11px] text-zinc-900 uppercase tracking-wider">Travel Stats</span>
                        </div>

                        {/* Travel stats cards matching screenshot */}
                        <div className="space-y-2">
                          {[
                            { label: 'Most Visited Country', value: 'Japan' },
                            { label: 'Total Travel Days', value: '127 days' },
                            { label: 'Hidden Gems Found', value: '18' },
                          ].map((st, i) => (
                            <div 
                              key={i}
                              className="bg-[#FAF8F5]/65 border border-[#ECE5DB] rounded-xl px-4 py-3 flex justify-between items-center hover:bg-[#FAF8F5]/90 transition-all text-left"
                            >
                              <span className="text-[10px] font-bold text-stone-600 font-sans">{st.label}</span>
                              <span className="text-[10.5px] font-extrabold text-zinc-900 font-sans text-right">{st.value}</span>
                            </div>
                          ))}
                        </div>

                      </div>
                    )}

                  </div>

                  </div>

                  {/* Bottom Navigation tab bar */}
                  <div className="bg-white border-t border-slate-100 px-3.5 py-1.5 flex justify-between items-center text-slate-400 select-none z-10">
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.Home size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Home</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.Search size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Explore</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.PlusCircle size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Post</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 hover:text-slate-700 cursor-pointer">
                      <Icons.Map size={12} className="stroke-[2]" />
                      <span className="text-[7.5px] font-medium">Trips</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5 text-indigo-650 font-bold">
                      <Icons.User size={12} className="stroke-[2.5]" />
                      <span className="text-[7.5px] font-bold">Profile</span>
                    </div>
                  </div>

                  {/* Simulated iOS Indicator */}
                  <div className="bg-white pb-1 pt-0.5 flex justify-center">
                    <div className="w-20 h-[3px] bg-slate-200 rounded-full" />
                  </div>

                </div>
              </div>
              <div className="p-5 text-left">
                <span className="text-[9px] uppercase font-bold tracking-wider text-[#4F46E5] block mb-1">
                  Active Screen 5
                </span>
                <h4 className="font-extrabold text-sm text-[#1E2129]">
                  Profile
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  A multi-layered traveler identity hub compiling statistics, verified specialty credentials, dynamic bio configuration, personal posts log, saved board arrays, and specialty badges.
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
        </div>
        <p>&copy; {new Date().getFullYear()} localEyes Team. All Academic Rights Reserved.</p>
      </footer>

      {/* 6. INTERACTIVE STORYBOARD OVERLAY MODAL */}
      <AnimatePresence>
        {isStoryboardOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setIsStoryboardOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 15, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-[#FAF9F6] border border-[#E9E5DE] rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-[#1E2129]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-white border-b border-[#ECE0CE]/55 px-6 py-4 flex items-center justify-between select-none">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800">
                    <Icons.Compass size={18} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-black text-[14px] font-display text-zinc-900 leading-tight">
                      Stage 1 Design Storyboard: TRIP FINDINGS & FOCUS
                    </h3>
                    <p className="text-[10px] text-stone-500 font-medium">
                      Co-design user journey mapping the initial planning pain-points of tourist discovery search.
                    </p>
                  </div>
                </div>
                
                {/* Close Button */}
                <button 
                  onClick={() => setIsStoryboardOpen(false)}
                  className="p-1.5 hover:bg-stone-100 rounded-full transition-colors text-stone-400 hover:text-[#1E2129] cursor-pointer"
                  title="Close Storyboard"
                >
                  <Icons.X size={18} />
                </button>
              </div>

              {/* View Selector Controls */}
              <div className="bg-stone-50 border-b border-[#ECE0CE]/45 px-6 py-2.5 flex flex-col sm:flex-row gap-2.5 sm:items-center sm:justify-between select-none text-[11px] font-extrabold font-sans">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setStoryboardActiveTab(1)}
                    className={`px-3 py-1 rounded-xl transition-all border text-[10.5px] cursor-pointer ${
                      storyboardActiveTab === 1 
                        ? 'bg-teal-50 border-teal-200 text-teal-800 shadow-sm' 
                        : 'bg-white border-stone-200 text-stone-550 hover:bg-stone-100'
                    }`}
                  >
                    1. Discovery Friction
                  </button>
                  <button
                    onClick={() => setStoryboardActiveTab(2)}
                    className={`px-3 py-1 rounded-xl transition-all border text-[10.5px] cursor-pointer ${
                      storyboardActiveTab === 2 
                        ? 'bg-teal-50 border-teal-200 text-teal-800 shadow-sm' 
                        : 'bg-white border-stone-200 text-stone-550 hover:bg-stone-100'
                    }`}
                  >
                    2. Platform Overload
                  </button>
                  <button
                    onClick={() => setStoryboardActiveTab(3)}
                    className={`px-3 py-1 rounded-xl transition-all border text-[10.5px] cursor-pointer ${
                      storyboardActiveTab === 3 
                        ? 'bg-teal-50 border-teal-200 text-teal-800 shadow-sm' 
                        : 'bg-white border-stone-200 text-stone-550 hover:bg-stone-100'
                    }`}
                  >
                    3. Peer Inquiry
                  </button>
                  <button
                    onClick={() => setStoryboardActiveTab(4)}
                    className={`px-3 py-1 rounded-xl transition-all border text-[10.5px] cursor-pointer ${
                      storyboardActiveTab === 4 
                        ? 'bg-teal-50 border-teal-200 text-teal-800 shadow-sm' 
                        : 'bg-white border-stone-200 text-stone-550 hover:bg-stone-100'
                    }`}
                  >
                    4. Memory Leak
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-stone-400 font-bold font-mono">View mode:</span>
                  <button
                    onClick={() => setStoryboardActiveTab(0)} // 0 represents the full comic strip!
                    className={`px-3 py-1 rounded-xl transition-all border flex items-center gap-1.5 text-[10.5px] cursor-pointer ${
                      storyboardActiveTab === 0 
                        ? 'bg-[#8A7052] border-[#8A7052] text-white shadow-sm' 
                        : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                    title="Grid view of all digital vector panels"
                  >
                    <Icons.Grid size={11} />
                    <span>Full Comic Sheet (Grid)</span>
                  </button>
                  <button
                    onClick={() => { setStoryboardActiveTab(5); }} // 5 represents original paper sketch photo
                    className={`px-3 py-1 rounded-xl transition-all border flex items-center gap-1.5 text-[10.5px] cursor-pointer ${
                      storyboardActiveTab === 5 
                        ? 'bg-[#8A7052] border-[#8A7052] text-white shadow-sm' 
                        : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-100 font-bold'
                    }`}
                    title="View snapshot of actual notebook drawings"
                  >
                    <Icons.Camera size={11} className={storyboardActiveTab === 5 ? "text-white" : "text-amber-600"} />
                    <span>Original Sketch Photo</span>
                  </button>
                </div>
              </div>

              {/* Modal Body Canvas */}
              <div className="flex-1 overflow-y-auto p-6 bg-white min-h-[380px] max-h-[64vh]">
                {storyboardActiveTab === 0 ? (
                  // Grid View: Show all 4 panels side-by-side
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
                    {/* Panel 1 Card */}
                    <div className="border border-[#ECE5DB] bg-[#FAF8F5]/30 p-4 rounded-2xl flex flex-col justify-between hover:shadow transition-all text-left">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="bg-teal-50 text-teal-850 px-2 py-0.5 rounded text-[8.5px] font-black uppercase tracking-wider">Panel 1</span>
                          <span className="text-[9px] font-sans text-stone-400 font-bold">Discovery Fail</span>
                        </div>
                        <h4 className="font-extrabold text-[#1E2129] text-[13px] tracking-tight leading-snug">
                          Sponsored Filter Bubbles
                        </h4>
                        <p className="text-[10px] text-stone-500 leading-relaxed mt-1">
                          Mahima searches for tourist spots in Japan, but finds only commercial ads.
                        </p>
                      </div>
                      
                      <div className="my-3 aspect-[16/10] bg-[#FAF8F5] border border-[#ECE0CE] rounded-xl flex items-center justify-center p-2">
                        <StoryboardSVG1 />
                      </div>

                      <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                        <span className="text-[8.5px] font-bold text-stone-400 uppercase font-mono block mb-1">Scenario Scan</span>
                        <p className="text-[10px] text-stone-700 leading-normal italic font-medium">
                          "Mahima is searching for tourist attractions in Japan, and only finds sponsored content."
                        </p>
                      </div>
                    </div>

                    {/* Panel 2 Card */}
                    <div className="border border-[#ECE5DB] bg-[#FAF8F5]/30 p-4 rounded-2xl flex flex-col justify-between hover:shadow transition-all text-left">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="bg-amber-50 text-amber-850 px-2 py-0.5 rounded text-[8.5px] font-black uppercase tracking-wider">Panel 2</span>
                          <span className="text-[9px] font-sans text-stone-400 font-bold">Visual Overload</span>
                        </div>
                        <h4 className="font-extrabold text-[#1E2129] text-[13px] tracking-tight leading-snug">
                          Overwhelmed by Interfaces
                        </h4>
                        <p className="text-[10px] text-stone-500 leading-relaxed mt-1">
                          Theresa agrees to start planning but finds the typical social feeds exhausting.
                        </p>
                      </div>

                      <div className="my-3 aspect-[16/10] bg-[#FAF8F5] border border-[#ECE0CE] rounded-xl flex items-center justify-center p-2">
                        <StoryboardSVG2 />
                      </div>

                      <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                        <span className="text-[8.5px] font-bold text-stone-400 uppercase font-mono block mb-1">Scenario Scan</span>
                        <p className="text-[10px] text-stone-700 leading-normal italic font-medium">
                          "we need to start planning" • "TikTok also is so overwhelming!" • "Calls Theresa, who also finds resources too overwhelming."
                        </p>
                      </div>
                    </div>

                    {/* Panel 3 Card */}
                    <div className="border border-[#ECE5DB] bg-[#FAF8F5]/30 p-4 rounded-2xl flex flex-col justify-between hover:shadow transition-all text-left">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="bg-indigo-50 text-indigo-850 px-2 py-0.5 rounded text-[8.5px] font-black uppercase tracking-wider">Panel 3</span>
                          <span className="text-[9px] font-sans text-stone-400 font-bold">Peer Inquiries</span>
                        </div>
                        <h4 className="font-extrabold text-[#1E2129] text-[13px] tracking-tight leading-snug">
                          Connecting with Classmates
                        </h4>
                        <p className="text-[10px] text-stone-500 leading-relaxed mt-1">
                          The team loops in Essa, a trusted friend who spent 5 days in Kyoto.
                        </p>
                      </div>

                      <div className="my-3 aspect-[16/10] bg-[#FAF8F5] border border-[#ECE0CE] rounded-xl flex items-center justify-center p-2">
                        <StoryboardSVG3 />
                      </div>

                      <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                        <span className="text-[8.5px] font-bold text-stone-400 uppercase font-mono block mb-1">Scenario Scan</span>
                        <p className="text-[10px] text-stone-700 leading-normal italic font-medium">
                          "Essa! What did you do in Japan?" • "Mahima & Theresa add Essa to the call... They asked for tips."
                        </p>
                      </div>
                    </div>

                    {/* Panel 4 Card */}
                    <div className="border border-[#ECE5DB] bg-[#FAF8F5]/30 p-4 rounded-2xl flex flex-col justify-between hover:shadow transition-all text-left">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="bg-rose-50 text-rose-850 px-2 py-0.5 rounded text-[8.5px] font-black uppercase tracking-wider">Panel 4</span>
                          <span className="text-[9px] font-sans text-stone-400 font-bold">The Transient Gap</span>
                        </div>
                        <h4 className="font-extrabold text-[#1E2129] text-[13px] tracking-tight leading-snug">
                          The Saved Spot Crisis
                        </h4>
                        <p className="text-[10px] text-stone-500 leading-relaxed mt-1">
                          Essa loves the unlisted local corners, but struggles to recall them easily.
                        </p>
                      </div>

                      <div className="my-3 aspect-[16/10] bg-[#FAF8F5] border border-[#ECE0CE] rounded-xl flex items-center justify-center p-2">
                        <StoryboardSVG4 />
                      </div>

                      <div className="bg-stone-50 p-2.5 rounded-xl border border-stone-100">
                        <span className="text-[8.5px] font-bold text-stone-400 uppercase font-mono block mb-1">Scenario Scan</span>
                        <p className="text-[10px] text-stone-700 leading-normal italic font-medium">
                          "All my fav spots were local hidden gems. I wish I could have saved them!" • "She doesn't remember them."
                        </p>
                      </div>
                    </div>
                  </div>
                ) : storyboardActiveTab === 5 ? (
                  // Original Sketch Photo Tab Content
                  <div className="space-y-6 pb-6 text-left animate-fade-in select-none">
                    <div className="bg-[#FEFCE8] border border-yellow-250/70 rounded-2xl p-4 flex gap-3 text-stone-700">
                      <div className="w-10 h-10 rounded-xl bg-yellow-105/90 flex items-center justify-center text-yellow-850 shrink-0">
                        <Icons.Lightbulb size={20} className="text-amber-600" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-[#1E2129] text-xs">Original Physical Notebook Storyboard Sketch</h4>
                        <p className="text-[10.5px] text-stone-500 leading-normal">
                          This section loads your actual storyboard camera snapshot directly from <code className="bg-stone-100 px-1 py-0.5 rounded font-mono text-stone-750 font-bold">/public/storyboard_photo.jpg</code>. Below, we've integrated both the raw file preview canvas and a full, high-fidelity transcription index matching the physical sketch!
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
                      {/* Left Block: Spiral notebook holding the image */}
                      <div className="bg-[#FAF8F5] border border-stone-250/70 rounded-3xl p-6 relative overflow-hidden shadow-inner flex flex-col">
                        {/* Spiral ring graphical nodes at top */}
                        <div className="absolute top-0 inset-x-0 h-4 flex justify-around px-8 pointer-events-none z-20">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div key={i} className="w-2.5 h-6 rounded-full bg-stone-300 border-r border-[#1E2129]/25 shadow-xs -mt-2.5" />
                          ))}
                        </div>

                        {/* Notebook sheet horizontal lines and red vertical margin */}
                        <div className="absolute inset-0 bg-[#FDFCF9] opacity-[0.98] select-none pointer-events-none" style={{
                          backgroundImage: 'linear-gradient(rgba(186, 218, 245, 0.45) 1.5px, transparent 1.5px)',
                          backgroundSize: '100% 16.5px',
                          backgroundPosition: '0 12px'
                        }}>
                          <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-red-200/95" />
                        </div>

                        <div className="relative z-10 pt-4 space-y-4">
                          <div className="flex justify-between items-center pb-2 border-b border-stone-200/50">
                            <span className="text-[11px] font-mono tracking-wider font-extrabold text-[#8A7052] uppercase">
                              Camera Capture Frame
                            </span>
                            <span className="text-[10px] text-stone-400 font-mono">storyboard_photo.jpg</span>
                          </div>

                          <div className="relative group/modalimg min-h-[350px] flex items-center justify-center bg-stone-150/40 rounded-2xl border border-stone-200 overflow-hidden">
                            {!storyboardPhotoError ? (
                              <img 
                                src={storyboardPhotoPaths[storyboardPhotoPathIndex]}
                                alt="Original Hand-drawn Sketch"
                                className="w-full h-auto object-contain rounded-xl max-h-[500px]"
                                onError={() => {
                                  if (storyboardPhotoPathIndex < storyboardPhotoPaths.length - 1) {
                                    setStoryboardPhotoPathIndex(storyboardPhotoPathIndex + 1);
                                  } else {
                                    setStoryboardPhotoError(true);
                                  }
                                }}
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="p-8 text-center max-w-sm space-y-3">
                                <div className="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 mx-auto">
                                  <Icons.Image size={24} />
                                </div>
                                <h5 className="font-extrabold text-stone-750 text-xs text-center">Image Placeholder (Wired!)</h5>
                                <p className="text-[10px] text-stone-500 leading-relaxed text-center">
                                  To render your actual camera photo here, save your story screen sketch in your project folder at:
                                  <br />
                                  <code className="inline-block bg-stone-200 font-mono text-stone-850 px-1.5 py-0.5 rounded mt-1.5">/public/storyboard_photo.jpg</code>
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Right Block: High-Fidelity Blueprint Study Grid */}
                      <div className="bg-white border border-[#E9E5DE] rounded-3xl p-6 space-y-4 shadow-sm relative">
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold text-teal-850 tracking-wider font-mono uppercase bg-teal-50 px-2.5 py-0.5 rounded-full inline-block">
                            Digital Replica Blueprint
                          </span>
                          <h4 className="font-extrabold font-display text-[15px] text-[#1E2129]">
                            4-Panel Lined Paper Narrative
                          </h4>
                          <p className="text-[10.5px] text-stone-500 leading-relaxed">
                            A direct transcription matching the hand-drafted pen and pencil annotations of the original physical notebook storyboard:
                          </p>
                        </div>

                        <div className="space-y-3.5 text-[10.5px] leading-relaxed">
                          {/* Panel 1 Transcription */}
                          <div className="border border-stone-200/80 bg-stone-50/50 p-3 rounded-xl space-y-1.5 hover:bg-stone-50 hover:border-teal-300 transition-all">
                            <div className="flex justify-between items-center">
                              <span className="font-extrabold text-[9.5px] text-[#8A7052] font-mono">1. sponsored attraction filters</span>
                              <span className="text-[8.5px] text-stone-400 font-mono">Top-Left Box</span>
                            </div>
                            <p className="text-stone-705 font-serif italic text-[11px] leading-normal">
                              "Mahima is searching for tourist attractions in Japan, and only finds sponsored content."
                            </p>
                            <div className="text-[8.5px] text-stone-450 leading-relaxed bg-white border border-stone-100 rounded px-1.5 py-1 flex items-center gap-1.5">
                              <Icons.PenTool size={10} className="text-stone-400 shrink-0" />
                              <span>Sketch includes back of head looking at a large wall desktop monitor with Google Sponsored rankings, styled with yellow ad buttons.</span>
                            </div>
                          </div>

                          {/* Panel 2 Transcription */}
                          <div className="border border-stone-200/80 bg-stone-50/50 p-3 rounded-xl space-y-1.5 hover:bg-stone-50 hover:border-teal-300 transition-all">
                            <div className="flex justify-between items-center">
                              <span className="font-extrabold text-[9.5px] text-[#8A7052] font-mono">2. call with theresa</span>
                              <span className="text-[8.5px] text-stone-400 font-mono">Top-Right Box</span>
                            </div>
                            <p className="text-stone-705 font-serif italic text-[11px] leading-normal">
                              "Mahima calls Theresa, who also finds current resources too overwhelming." (Subdialogues pencil notes: "we need to start planning", "TikTok also is so overwhelming!")
                            </p>
                            <div className="text-[8.5px] text-stone-450 leading-relaxed bg-white border border-stone-100 rounded px-1.5 py-1 flex items-center gap-1.5">
                              <Icons.PenTool size={10} className="text-stone-400 shrink-0" />
                              <span>Sketch depicts phone screen and browser viewport streams representing complex travel lists.</span>
                            </div>
                          </div>

                          {/* Panel 3 Transcription */}
                          <div className="border border-stone-200/80 bg-stone-50/50 p-3 rounded-xl space-y-1.5 hover:bg-stone-50 hover:border-teal-300 transition-all">
                            <div className="flex justify-between items-center">
                              <span className="font-extrabold text-[9.5px] text-[#8A7052] font-mono">3. looping in classmate essa</span>
                              <span className="text-[8.5px] text-stone-400 font-mono">Bottom-Left Box</span>
                            </div>
                            <p className="text-stone-705 font-serif italic text-[11px] leading-normal">
                              "Mahima & Theresa add Essa to the call, who just went to Japan. They asked for trip recommendations." (Dialogue bubbles notes: "Essa! What did you do in Japan?", "spent 5 days in Kyoto...")
                            </p>
                            <div className="text-[8.5px] text-stone-450 leading-relaxed bg-white border border-stone-100 rounded px-1.5 py-1 flex items-center gap-1.5">
                              <Icons.PenTool size={10} className="text-stone-400 shrink-0" />
                              <span>Sketch displays laptop client framework with dual nested screen feeds.</span>
                            </div>
                          </div>

                          {/* Panel 4 Transcription */}
                          <div className="border border-[#ECE0CE] bg-[#FAF8F5]/40 p-3 rounded-xl space-y-1.5 hover:bg-stone-50 hover:border-teal-300 transition-all">
                            <div className="flex justify-between items-center">
                              <span className="font-extrabold text-[9.5px] text-[#8A7052] font-mono">4. local gems memory leak</span>
                              <span className="text-[8.5px] text-stone-400 font-mono">Bottom-Right Box</span>
                            </div>
                            <p className="text-stone-705 font-serif italic text-[11px] leading-normal">
                              "Essa shares that all her favorite spots were recommended by locals, and she doesn't remember them." (Dialogue: "what recs do you have?", "All my fav spots were local hidden gems. I wish I could have saved them!")
                            </p>
                            <div className="text-[8.5px] text-stone-450 leading-relaxed bg-white border border-stone-100 rounded px-1.5 py-1 flex items-center gap-1.5">
                              <Icons.PenTool size={10} className="text-stone-400 shrink-0" />
                              <span>Sketch illustrates video panel and empty documents indicating the lack of centralized tools.</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Focus View Mode
                  <div className="flex flex-col md:flex-row gap-6 items-stretch h-full pb-2">
                    {/* SVG Canvas Column (Left/Center) */}
                    <div className="flex-1 border border-[#ECE5DB] bg-[#FAF8F5]/30 rounded-2xl p-4 flex flex-col justify-center items-center min-h-[300px] shadow-inner relative">
                      <div className="absolute top-3 left-3 bg-zinc-900/10 text-[#1E2129] text-[8.5px] font-extrabold font-mono px-2.5 py-1 rounded-full">
                        ACTIVE STUDY PANEL {storyboardActiveTab} / 4
                      </div>
                      <div className="w-full max-w-md aspect-[16/10] flex items-center justify-center">
                        {storyboardActiveTab === 1 && <StoryboardSVG1 />}
                        {storyboardActiveTab === 2 && <StoryboardSVG2 />}
                        {storyboardActiveTab === 3 && <StoryboardSVG3 />}
                        {storyboardActiveTab === 4 && <StoryboardSVG4 />}
                      </div>
                    </div>

                    {/* Metadata & Narrative Column (Right) */}
                    <div className="w-full md:w-[350px] flex flex-col justify-between gap-4 bg-[#FAF8F5] border border-[#ECE5DB] rounded-2xl p-5 text-left">
                      <div className="space-y-3">
                        <div>
                          <span className="inline-block px-1.5 py-0.2 rounded bg-teal-50 text-teal-800 text-[8px] font-black uppercase tracking-wider font-mono">
                            {storyboardActiveTab === 1 && "Stage 1: Ad Overlord"}
                            {storyboardActiveTab === 2 && "Stage 2: Tool Fatigue"}
                            {storyboardActiveTab === 3 && "Stage 3: Peer-to-Peer"}
                            {storyboardActiveTab === 4 && "Stage 4: Memory Failure"}
                          </span>
                          
                          <h4 className="font-extrabold text-[14.5px] text-zinc-950 font-display mt-1 leading-snug">
                            {storyboardActiveTab === 1 && "The Cluttered Filter Bubble"}
                            {storyboardActiveTab === 2 && "The Exhausting Social Feed"}
                            {storyboardActiveTab === 3 && "Seeking Authentic Dialogue"}
                            {storyboardActiveTab === 4 && "Forgotten Local Treasures"}
                          </h4>
                        </div>

                        <div className="space-y-1">
                          <h5 className="text-[9px] uppercase font-bold tracking-wider text-stone-400 font-mono">
                            Narrative Discovery
                          </h5>
                          <p className="text-[11px] text-stone-650 leading-relaxed font-semibold">
                            {storyboardActiveTab === 1 && "Our persona Mahima runs search queries for authentic Japanese spots but is met with thick columns of commercialized, sponsored agency ads that crowd out raw recommendations."}
                            {storyboardActiveTab === 2 && "Mahima invites Theresa to plan, but scrolling through hyped video feeds and ad-laden travel sites proves exhausting and unproductive."}
                            {storyboardActiveTab === 3 && "Looping in trusted classmate Essa, who just got back from Tokyo & Kyoto, they finally query authentic peer-to-peer travel suggestions."}
                            {storyboardActiveTab === 4 && "Essa reveals that her top spots were totally organic hidden local gems. But because they were sent in transient chats, she doesn't remember their details."}
                          </p>
                        </div>

                        <div className="bg-white rounded-xl border border-stone-200 p-2.5 shadow-inner">
                          <h6 className="font-black text-[8.5px] uppercase tracking-wider text-[#8A7052] font-mono mb-1 flex items-center gap-1">
                            <Icons.MessageSquare size={9.5} />
                            <span>Dialogue Log (From Sketch)</span>
                          </h6>
                          <div className="text-[10px] text-zinc-900 leading-relaxed italic border-l border-[#8A7052] pl-2 font-semibold whitespace-pre-line">
                            {storyboardActiveTab === 1 && "• Mahima is searching for tourist attractions in Japan, and only finds sponsored content."}
                            {storyboardActiveTab === 2 && "• \"we need to start planning\"\n• \"TikTok also is so overwhelming!\"\n• Calls Theresa, who also finds current resources too overwhelming."}
                            {storyboardActiveTab === 3 && "• \"Essa! what did you do in Japan?\"\n• \"spent 5 days in Kyoto...\"\n• Mahima & Theresa add Essa to the call. They asked for trip recommendations."}
                            {storyboardActiveTab === 4 && "• \"what recs do you have?\"\n• \"All my fav spots were local hidden gems. I wish I could have saved them!\"\n• Essa shares that all her favorite spots were recommended by locals, and she doesn't remember them."}
                          </div>
                        </div>
                      </div>

                      {/* Previous / Next slides controllers */}
                      <div className="flex border-t border-stone-200 pt-3 items-center justify-between">
                        <button
                          disabled={storyboardActiveTab === 1}
                          onClick={() => setStoryboardActiveTab(storyboardActiveTab - 1)}
                          className="flex items-center gap-1 py-1 px-2.5 bg-white border border-stone-200 hover:bg-stone-50 rounded-lg disabled:opacity-40 disabled:pointer-events-none transition-colors text-[10px] font-extrabold cursor-pointer"
                        >
                          <Icons.ChevronLeft size={12} />
                          <span>Prev</span>
                        </button>

                        <button
                          disabled={storyboardActiveTab === 4}
                          onClick={() => setStoryboardActiveTab(storyboardActiveTab + 1)}
                          className="flex items-center gap-1 py-1 px-2.5 bg-teal-750 text-white hover:bg-teal-850 rounded-lg disabled:opacity-40 disabled:pointer-events-none transition-colors text-[10px] font-extrabold cursor-pointer"
                        >
                          <span>Next</span>
                          <Icons.ChevronRight size={12} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer */}
              <div className="bg-stone-50 border-t border-[#ECE0CE]/55 px-6 py-3.5 flex items-center justify-between text-[10.5px] text-stone-450 select-none">
                <span className="font-semibold">localEyes Storyboard System • Phase 1 Research Log</span>
                <button
                  onClick={() => setIsStoryboardOpen(false)}
                  className="bg-zinc-900 text-white hover:bg-zinc-800 transition-colors py-1.5 px-4.5 rounded-xl font-extrabold font-sans cursor-pointer active:scale-97"
                >
                  Close Overlay
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

// ==========================================
// STATIC ILLUSTRATIVE SVG STORYBOARD PANELS
// ==========================================

function StoryboardSVG1() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full text-stone-800 font-sans" fill="none" stroke="currentColor">
      {/* Background paper texture/grid */}
      <rect x="5" y="5" width="390" height="240" rx="12" fill="#FAF6F0" stroke="#ECE5DB" strokeWidth="1" />
      <line x1="5" y1="40" x2="395" y2="40" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="80" x2="395" y2="80" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="120" x2="395" y2="120" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="160" x2="395" y2="160" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="200" x2="395" y2="200" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />

      {/* Screen container */}
      <rect x="70" y="32" width="260" height="152" rx="8" fill="white" stroke="#A78B71" strokeWidth="2" />
      <line x1="70" y1="46" x2="330" y2="46" stroke="#ECE5DB" />
      <circle cx="80" cy="39" r="3" fill="#EF4444" stroke="none" />
      <circle cx="90" cy="39" r="3" fill="#F59E0B" stroke="none" />
      <circle cx="100" cy="39" r="3" fill="#10B981" stroke="none" />
      
      {/* Laptop Base */}
      <path d="M50 184 L350 184 L370 197 L30 197 Z" fill="#ECE5DB" stroke="#A78B71" strokeWidth="2" />
      <line x1="180" y1="190" x2="220" y2="190" stroke="#A78B71" strokeWidth="2" />

      {/* Google-like search and title */}
      <rect x="110" y="54" width="180" height="15" rx="3" fill="#FAF8F5" stroke="#E5E7EB" />
      <text x="116" y="64" className="text-[7.5px] fill-stone-500 font-sans" stroke="none">Best places in Japan... ⌕</text>

      {/* Sponsored Ads boxes */}
      <rect x="110" y="75" width="180" height="24" rx="4" fill="#FEF2F2" stroke="#FCA5A5" />
      <text x="116" y="84" className="text-[7.5px] font-black fill-red-650" stroke="none">★ SPONSORED AGENCY AD</text>
      <text x="116" y="93" className="text-[6.5px] fill-stone-500 font-medium" stroke="none">Tour packages 30% off, booked now!</text>

      <rect x="110" y="104" width="180" height="24" rx="4" fill="#FEF2F2" stroke="#FCA5A5" />
      <text x="116" y="113" className="text-[7.5px] font-black fill-red-650" stroke="none">★ PROMOTED LINK: BOOK TOKYO</text>
      <text x="116" y="122" className="text-[6.5px] fill-stone-500 font-medium" stroke="none">Affiliated top 10 commercial hotels list.</text>

      <rect x="110" y="133" width="180" height="24" rx="4" fill="#FEF2F2" stroke="#FCA5A5" />
      <text x="116" y="142" className="text-[7.5px] font-black fill-red-650" stroke="none">★ GOYA GUIDES COMMERCIAL</text>
      <text x="116" y="151" className="text-[6.5px] fill-stone-500 font-medium" stroke="none">Paid influencer recommended itinerary.</text>

      {/* Back of Head silhouette overlaid with headphones */}
      <g stroke="#1E2129" strokeWidth="2" fill="none">
        {/* Head curve outline */}
        <path d="M 210 184 C 210 140, 190 140, 190 184" fill="#1E2129" fillOpacity="0.1" />
        {/* Headphone band */}
        <path d="M 183 158 Q 200 144, 217 158" strokeWidth="2.5" />
        {/* Headphone cups */}
        <rect x="178" y="155" width="7" height="13" rx="3" fill="#1E2129" />
        <rect x="215" y="155" width="7" height="13" rx="3" fill="#1E2129" />
      </g>
    </svg>
  );
}

function StoryboardSVG2() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full text-stone-800 font-sans" fill="none" stroke="currentColor">
      {/* Background paper texture/grid */}
      <rect x="5" y="5" width="390" height="240" rx="12" fill="#FAF6F0" stroke="#ECE5DB" strokeWidth="1" />
      <line x1="5" y1="40" x2="395" y2="40" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="80" x2="395" y2="80" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="120" x2="395" y2="120" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="160" x2="395" y2="160" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="200" x2="395" y2="200" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />

      {/* Smartphone frame */}
      <rect x="145" y="25" width="110" height="200" rx="14" fill="white" stroke="#A78B71" strokeWidth="2.5" />
      <rect x="150" y="32" width="100" height="186" rx="8" fill="#FAF8F5" stroke="#ECE5DB" />
      {/* Speaker and button circles */}
      <line x1="185" y1="28" x2="215" y2="28" stroke="#A78B71" strokeWidth="1.5" />
      <circle cx="200" cy="210" r="4" fill="none" stroke="#A78B71" />

      {/* Cluttered items inside phone UI */}
      {/* Header */}
      <rect x="155" y="38" width="90" height="15" rx="3" fill="#D1FAE5" stroke="#34D399" />
      <text x="159" y="48" className="text-[6.5px] font-black fill-emerald-800" stroke="none">JAPAN: THINGS TO DO 🔥</text>
      
      {/* Block 1 */}
      <rect x="155" y="58" width="90" height="42" rx="4" fill="#FAF8F5" stroke="#ECE5DB" />
      <circle cx="165" cy="70" r="6" fill="#FCA5A5" stroke="none" />
      <text x="175" y="73" className="text-[6.5px] font-black fill-stone-800 leading-none" stroke="none">10 Overrated Spots</text>
      <text x="159" y="87" className="text-[5px] fill-stone-550" stroke="none">Do not come here unless you...</text>
      <path d="M159 92 L220 92" stroke="#FCA5A5" strokeWidth="2" strokeDasharray="1 2" />

      {/* Block 2 (Pop-up ad overlay) */}
      <rect x="160" y="105" width="80" height="48" rx="6" fill="#FFFBEB" stroke="#FBBF24" strokeWidth="1.5" />
      <text x="165" y="117" className="text-[6.5px] font-black fill-amber-800" stroke="none">⚡ BUY MEMBERSHIP</text>
      <text x="165" y="126" className="text-[5.5px] fill-stone-500" stroke="none">Access hidden guide list...</text>
      <rect x="165" y="134" width="70" height="12" rx="3" fill="#FBBF24" stroke="none" />
      <text x="178" y="142" className="text-[5.5px] font-bold fill-amber-950" stroke="none">$19.99 Unlock Close</text>

      {/* Feedback arrows / comments icons */}
      <circle cx="160" cy="184" r="5" fill="#ECE5DB" stroke="none" />
      <path d="M158 184 L162 184" stroke="white" />
      <circle cx="174" cy="184" r="5" fill="#ECE5DB" stroke="none" />
      <circle cx="188" cy="184" r="5" fill="#ECE5DB" stroke="none" />

      {/* Dialog bubbles on the sides - representing Dialogue scans */}
      {/* Dialogue 1 (Left) */}
      <path d="M15 80 L115 80 L125 90 L115 100 L15 100 Z" fill="white" stroke="#A78B71" strokeWidth="1" />
      <text x="21" y="92" className="text-[6.5px] font-black fill-stone-850 font-mono" stroke="none">"we need to start planning"</text>

      {/* Dialogue 2 (Right) */}
      <path d="M380 140 L280 140 L270 150 L280 160 L380 160 Z" fill="white" stroke="#A78B71" strokeWidth="1" />
      <text x="285" y="152" className="text-[6.5px] font-black fill-stone-850 font-mono" stroke="none">"TikTok is overwhelming!"</text>
    </svg>
  );
}

function StoryboardSVG3() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full text-stone-800 font-sans" fill="none" stroke="currentColor">
      {/* Background paper texture/grid */}
      <rect x="5" y="5" width="390" height="240" rx="12" fill="#FAF6F0" stroke="#ECE5DB" strokeWidth="1" />
      <line x1="5" y1="40" x2="395" y2="40" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="80" x2="395" y2="80" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="120" x2="395" y2="120" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="160" x2="395" y2="160" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="200" x2="395" y2="200" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />

      {/* Laptop Screen structure */}
      <rect x="68" y="44" width="264" height="142" rx="6" fill="white" stroke="#A78B71" strokeWidth="2" />
      <line x1="68" y1="56" x2="332" y2="56" stroke="#ECE5DB" />
      <circle cx="200" cy="50" r="2.5" fill="#1E2129" stroke="none" />
      
      {/* Base details */}
      <path d="M48 185 L352 185 L368 197 L32 197 Z" fill="#ECE5DB" stroke="#A78B71" strokeWidth="2" />
      <rect x="184" y="187" width="32" height="4" fill="white" stroke="#A78B71" rx="1" />

      {/* 3-way Video Call Split Grid layout */}
      {/* Box 1 (Left - Mahima) */}
      <rect x="76" y="66" width="76" height="110" rx="4" fill="#FAF8F5" stroke="#BFDBFE" strokeWidth="1" />
      <circle cx="114" cy="110" r="16" fill="#DBEAFE" stroke="#BFDBFE" />
      <path d="M102 144 C102 130 126 130 126 144 Z" fill="#BFDBFE" />
      <text x="114" y="152" className="text-[7px] font-black fill-blue-800 text-center" textAnchor="middle" stroke="none">Mahima</text>

      {/* Box 2 (Right Top - Theresa) */}
      <rect x="158" y="66" width="78" height="52" rx="4" fill="#FAF8F5" stroke="#FBCFE8" strokeWidth="1" />
      <circle cx="197" cy="85" r="11" fill="#FCE7F3" stroke="#FBCFE8" />
      <path d="M189 108 C189 99 205 99 205 108 Z" fill="#FBCFE8" />
      <text x="197" y="114" className="text-[6.5px] font-black fill-pink-800 text-center" textAnchor="middle" stroke="none">Theresa</text>

      {/* Box 3 (Right Bottom - Essa) */}
      <rect x="158" y="124" width="78" height="52" rx="4" fill="#FAF8F5" stroke="#FEF08A" strokeWidth="1" />
      {/* Kyoto Pagoda simple background inside Essa's camera */}
      <path d="M218 152 L224 152 L224 135 L218 135 Z M214 142 L228 142 M212 148 L230 148" stroke="#FEF08A" strokeWidth="1.5" />
      <circle cx="197" cy="143" r="11" fill="#FEF9C3" stroke="#FEF08A" />
      <path d="M189 166 C189 157 205 157 205 166 Z" fill="#FEF08A" />
      <text x="197" y="172" className="text-[6.5px] font-black fill-amber-800 text-center" textAnchor="middle" stroke="none">Essa (Tokyo)</text>

      {/* Right margin: Participant list dots */}
      <circle cx="248" cy="80" r="3" fill="#10B981" stroke="none" />
      <line x1="255" y1="80" x2="310" y2="80" stroke="#ECE5DB" strokeWidth="2" />
      <circle cx="248" cy="100" r="3" fill="#10B981" stroke="none" />
      <line x1="255" y1="100" x2="310" y2="100" stroke="#ECE5DB" strokeWidth="2" />
      <circle cx="248" cy="120" r="3" fill="#10B981" stroke="none" />
      <line x1="255" y1="120" x2="310" y2="120" stroke="#ECE5DB" strokeWidth="2" />

      {/* Dialogue Bubbles */}
      <path d="M10 150 L110 150 L120 158 L110 166 L10 166 Z" fill="white" stroke="#A78B71" strokeWidth="1" />
      <text x="16" y="160" className="text-[6px] font-black fill-stone-850 font-mono" stroke="none">"Essa! What did you do in Japan?"</text>

      <path d="M385 95 L275 95 L265 105 L275 115 L385 115 Z" fill="white" stroke="#A78B71" strokeWidth="1" />
      <text x="280" y="106" className="text-[6.5px] font-black fill-stone-850 font-mono" stroke="none">"spent 5 days in Kyoto..."</text>
    </svg>
  );
}

function StoryboardSVG4() {
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full text-stone-800 font-sans" fill="none" stroke="currentColor">
      {/* Background paper texture/grid */}
      <rect x="5" y="5" width="390" height="240" rx="12" fill="#FAF6F0" stroke="#ECE5DB" strokeWidth="1" />
      <line x1="5" y1="40" x2="395" y2="40" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="80" x2="395" y2="80" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="120" x2="395" y2="120" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="160" x2="395" y2="160" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />
      <line x1="5" y1="200" x2="395" y2="200" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="2 3" />

      {/* Big desktop laptop representing list system */}
      <rect x="74" y="32" width="250" height="152" rx="6" fill="white" stroke="#A78B71" strokeWidth="2" />
      <line x1="74" y1="45" x2="324" y2="45" stroke="#ECE5DB" />
      {/* Base */}
      <path d="M54 184 L346 184 L362 196 L38 196 Z" fill="#ECE5DB" stroke="#A78B71" strokeWidth="2" />

      {/* Desktop List Representation (Left part of screen) */}
      <text x="82" y="58" className="text-[8px] font-black fill-stone-800" stroke="none">KYOTO GEMS COLLECTION 🎒</text>
      <line x1="82" y1="64" x2="210" y2="64" stroke="#8A7052" strokeWidth="1" />

      <rect x="82" y="70" width="128" height="22" rx="3" fill="#F7F3EB" stroke="#ECE5DB" />
      <circle cx="91" cy="81" r="4.5" fill="none" stroke="#22C55E" strokeWidth="1.5" />
      <text x="100" y="80" className="text-[6.5px] font-bold fill-stone-800" stroke="none">Uji Drip Matcha Counter</text>
      <text x="100" y="88" className="text-[5.5px] fill-stone-400" stroke="none">★ 5.0 • Unlisted, local micro-bar</text>

      <rect x="82" y="97" width="128" height="22" rx="3" fill="#F7F3EB" stroke="#ECE5DB" />
      <circle cx="91" cy="108" r="4.5" fill="none" stroke="#22C55E" strokeWidth="1.5" />
      <text x="100" y="107" className="text-[6.5px] font-bold fill-stone-800" stroke="none">Gion Antique Cloth Stall</text>
      <text x="100" y="115" className="text-[5.5px] fill-stone-400" stroke="none">★ 4.8 • Behind the shrine gate</text>

      <rect x="82" y="124" width="128" height="22" rx="3" fill="#F7F3EB" stroke="#ECE5DB" strokeWidth="1" strokeDasharray="1 2" />
      <circle cx="91" cy="135" r="4.5" fill="none" stroke="#ECE5DB" strokeWidth="1.5" />
      <text x="100" y="137" className="text-[6.5px] font-medium fill-stone-400" stroke="none">Log missing spots...</text>

      {/* Video feeds inset showing Essa talking on Right side of the screen */}
      <rect x="222" y="54" width="94" height="114" rx="4" fill="#FAF6F0" stroke="#A78B71" />
      <rect x="226" y="58" width="86" height="92" rx="2" fill="#FAF8F5" stroke="#ECE5DB" />
      <circle cx="269" cy="98" r="16" fill="#FEF9C3" stroke="#FEF08A" />
      <path d="M253 138 C253 122 285 122 285 138 Z" fill="#FEF08A" />
      <text x="269" y="146" className="text-[7.5px] font-black fill-stone-800 text-center" textAnchor="middle" stroke="none">Essa</text>
      <path d="M285 64 L308 64 L308 80 L290 80" stroke="#FF5A5F" strokeWidth="1" fill="none" />
      <text x="290" y="74" className="text-[6px] font-black fill-red-500" stroke="none">● REC</text>

      {/* Connection bubble */}
      <path d="M10 135 L120 135 L130 143 L120 151 L10 151 Z" fill="white" stroke="#A78B71" strokeWidth="1" />
      <text x="16" y="145" className="text-[6px] font-black fill-stone-850 font-mono" stroke="none">"I wish I could have saved them!"</text>
    </svg>
  );
}
