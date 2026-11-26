/**
 * 1. EXPANDED 16-ITEM PRODUCT CATALOG DATA WITH PHILIPPINE PESO (₱) PRICING
 */
const PRODUCTS = [
  {
    id: 'titan-x900-rack',
    sku: 'IF-PRX-900',
    name: 'Titan X-900 Power Rack',
    category: 'Benches & Racks',
    price: 149500,
    specBadge: '11-Gauge / 545 kg',
    rating: 5.0,
    reviews: 164,
    dimensions: '135 cm W × 147 cm D × 234 cm H',
    capacity: '545 kg (1,200 lb) Rackable Load Capacity',
    finish: 'Electrostatic Matte Black Powder Coat',
    warranty: '10-Year Structural Frame Warranty',
    description: 'Overbuilt 3x3" 11-gauge steel uprights with 1" laser-cut Westside hole spacing, UHMW-lined sandwich J-cups, pin-pipe safeties, and multi-grip pull-up bar.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'apex-20kg-barbell',
    sku: 'IF-BAR-20KG',
    name: 'Apex 20kg Olympic Barbell',
    category: 'Free Weights & Bars',
    price: 21500,
    specBadge: '20 kg / 200k PSI',
    rating: 4.9,
    reviews: 238,
    dimensions: '2,200 mm L × 28.5 mm Shaft Diameter',
    capacity: '680 kg (1,500 lb) Static Tensile Rating',
    finish: 'Black Cerakote Shaft / Hard Chrome Sleeves',
    warranty: 'Lifetime Structural Bending Warranty',
    description: 'Competition-grade power & Olympic barbell machined from 200,000 PSI alloy steel with medium-aggressive volcano knurling and 8 needle-bearing sleeve rotation.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'vortex-air-bike',
    sku: 'IF-AIR-VX1',
    name: 'Vortex Air Assault Bike',
    category: 'Cardio',
    price: 54900,
    specBadge: '27" Steel Fan / HIIT',
    rating: 4.9,
    reviews: 192,
    dimensions: '130 cm L × 58 cm W × 127 cm H',
    capacity: '160 kg (350 lb) Heavy-Duty Rider Limit',
    finish: 'Reinforced Chromoly Cranks + Matte Frame',
    warranty: '5-Year Frame / 2-Year Moving Parts',
    description: 'Unlimited air-resistance conditioning bike built with a 27-inch high-inertia steel fan, 22 sealed cartridge bearings, and interval-ready telemetry console.',
    image: 'https://images.unsplash.com/photo-1591291621164-2c6367723315?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'ironcast-kettlebell-set',
    sku: 'IF-KB-824',
    name: 'IronCast Competition Kettlebell Set (8–24kg)',
    category: 'Conditioning',
    price: 26800,
    specBadge: '8–24 kg (5 Bells)',
    rating: 4.9,
    reviews: 175,
    dimensions: 'Uniform 210 mm Competition Bell Diameter',
    capacity: 'Single-Cast Void-Free Ductile Iron',
    finish: 'Color-Coded Enamel + Raw Steel Handle',
    warranty: 'Lifetime Unbreakable Cast Warranty',
    description: 'Complete 5-bell competition set (8kg, 12kg, 16kg, 20kg, 24kg) featuring uniform shell geometry across every weight for consistent rack and overhead mechanics.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'proseries-fid-bench',
    sku: 'IF-BCH-FID',
    name: 'ProSeries Adjustable FID Bench',
    category: 'Benches & Racks',
    price: 29900,
    specBadge: '7 Angles / 450 kg',
    rating: 4.8,
    reviews: 184,
    dimensions: '132 cm L × 61 cm W × 44.5 cm Flat Height',
    capacity: '450 kg (1,000 lb) Total Rated Capacity',
    finish: '11-Gauge Steel + High-Grip Marine Vinyl',
    warranty: '10-Year Frame / 2-Year Upholstery',
    description: 'Zero-gap ladder-style Flat-Incline-Decline utility bench with 7 backrest positions (-15° to 85°), 3 seat angles, and knurled rear transport handle.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'hydroglide-rower-pro',
    sku: 'IF-ROW-HYD',
    name: 'HydroGlide Rower Pro',
    category: 'Cardio',
    price: 72500,
    specBadge: 'Dual-Tank Resistance',
    rating: 4.9,
    reviews: 141,
    dimensions: '213 cm L × 56 cm W × 53 cm H (Upright Storage)',
    capacity: '205 kg (450 lb) Commercial User Rating',
    finish: 'Anodized Aluminum Rail + Polycarbonate Tank',
    warranty: '5-Year Frame / 3-Year Tank & Seals',
    description: 'Variable fluid-resistance rowing ergometer delivering authentic on-water catch dynamics, whisper-quiet impeller drive, and Bluetooth FTMS performance tracking.',
    image: 'https://images.unsplash.com/photo-1519505907962-0a6cb0167c73?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'hexcore-dumbbell-pair',
    sku: 'IF-DB-25KG',
    name: 'HexCore Rubber Dumbbell Pair (25kg)',
    category: 'Free Weights & Bars',
    price: 13800,
    specBadge: '2 × 25 kg (50 kg)',
    rating: 4.9,
    reviews: 290,
    dimensions: '38.6 cm L × 18 cm Head Diameter (Each)',
    capacity: 'Drop-Tested Virgin Rubber Encasement',
    finish: 'Low-Odor Virgin Rubber + Chrome Ergo Grip',
    warranty: '5-Year Commercial Head-Weld Warranty',
    description: 'Anti-roll hexagonal dumbbells with friction-welded solid steel heads encased in shock-absorbing virgin rubber and contoured 34 mm chrome handles.',
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'kevlar-ball-bundle',
    sku: 'IF-COND-KVB',
    name: 'Kevlar Slam Ball & Wall Ball Bundle',
    category: 'Conditioning',
    price: 10500,
    specBadge: '9 kg + 14 kg Bundle',
    rating: 4.8,
    reviews: 118,
    dimensions: '35 cm Wall Ball & 28 cm Treaded Slam Ball',
    capacity: 'Reinforced Double-Stitched Kevlar Shell',
    finish: 'Ballistic Kevlar Weave + Dead-Bounce Core',
    warranty: '2-Year High-Impact Seam Warranty',
    description: 'Complete metabolic conditioning duo pairing a 9 kg (20 lb) ballistic Kevlar wall ball with a 14 kg (30 lb) no-bounce vulcanized tire-tread slam ball.',
    image: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'dual-stack-cable-trainer',
    sku: 'IF-FT-200X2',
    name: 'Dual-Stack Functional Cable Trainer',
    category: 'Strength',
    price: 158900,
    specBadge: '2 × 90 kg Stacks',
    rating: 5.0,
    reviews: 89,
    dimensions: '163 cm W × 112 cm D × 213 cm H',
    capacity: '180 kg Total Laser-Cut Steel Weight Stacks',
    finish: 'Brushed Stainless Columns + Aircraft Cable',
    warranty: '10-Year Frame / 5-Year Pulleys & Cables',
    description: 'Commercial twin-column functional trainer with 2:1 pulley ratio, 26 laser-numbered height adjustments, multi-angle chin-up bridge, and 6 anodized attachments.',
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'linear-leg-press-hack',
    sku: 'IF-LP-45DEG',
    name: '45-Degree Linear Leg Press / Hack Squat',
    category: 'Strength',
    price: 119500,
    specBadge: '450 kg Carriage',
    rating: 4.9,
    reviews: 76,
    dimensions: '224 cm L × 157 cm W × 147 cm H',
    capacity: '450 kg (1,000 lb) Plate-Loaded Carriage Rating',
    finish: 'Chrome Guide Rods + Diamond-Plate Footdecks',
    warranty: '10-Year Structural Frame & Bearing Warranty',
    description: '2-in-1 commercial lower-body powerhouse featuring linear ball-bearing carriage travel, quick-flip backrest conversion, and dual racking safety lockouts.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'calibrated-bumper-set',
    sku: 'IF-PLT-140KG',
    name: 'Calibrated Steel Bumper Plate Set (140kg)',
    category: 'Free Weights & Bars',
    price: 47500,
    specBadge: '140 kg / ±10g Spec',
    rating: 5.0,
    reviews: 153,
    dimensions: '450 mm IWF Standard • Ultra-Thin Profile',
    capacity: 'Calibrated Within 10 Grams of Stated Weight',
    finish: 'Durometer-90 Virgin Rubber + Zinc Steel Disc',
    warranty: '5-Year Commercial Drop Warranty',
    description: 'Competition-calibrated 140kg bumper set (pairs of 25kg, 20kg, 15kg, 10kg) with slim dead-blow profile allowing up to 320kg+ loaded onto a standard Olympic sleeve.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'curved-slat-treadmill',
    sku: 'IF-TRD-SLAT',
    name: 'Self-Powered Curved Slat Treadmill',
    category: 'Cardio',
    price: 198000,
    specBadge: 'Zero-Power / 180 kg',
    rating: 4.9,
    reviews: 112,
    dimensions: '173 cm L × 84 cm W × 157 cm H',
    capacity: '180 kg (400 lb) Max Sprint User Capacity',
    finish: 'Vulcanized Rubber Slats + 112 Sealed Bearings',
    warranty: '10-Year Frame / 5-Year Slat Belt Warranty',
    description: 'Motor-free curved slat runner engineered for explosive HIIT sprint intervals and natural forefoot strike mechanics—zero electricity required.',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'commercial-ghd',
    sku: 'IF-GHD-PRO',
    name: 'Commercial GHD (Glute-Ham Developer)',
    category: 'Benches & Racks',
    price: 43900,
    specBadge: '2x3" 11-Gauge / 225 kg',
    rating: 4.8,
    reviews: 94,
    dimensions: '173 cm L × 76 cm W × 124 cm H',
    capacity: '225 kg (500 lb) Dynamic Athlete Rating',
    finish: 'Matte Black Powder Coat + Split-Pad Vinyl',
    warranty: '10-Year Frame / 2-Year High-Density Pads',
    description: 'Heavy-duty posterior-chain builder with 10-position chrome footplate slide, dual-roller ankle lock, band pegs, and split anatomical hip pads.',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'heavy-prowler-sled',
    sku: 'IF-SLD-PRW',
    name: 'Heavy Prowler Tank Weight Sled',
    category: 'Conditioning',
    price: 20900,
    specBadge: '7-Gauge / 270 kg Load',
    rating: 4.9,
    reviews: 137,
    dimensions: '102 cm L × 61 cm W × 96 cm H',
    capacity: '270 kg (600 lb) Olympic Plate Stack Capacity',
    finish: '7-Gauge Steel + Replaceable HDPE Skis',
    warranty: '10-Year Structural Weld Warranty',
    description: 'All-surface push/pull turf and asphalt prowler sled equipped with removable high-push poles, low push bar, and bolt-on UHMW polymer ski shoes.',
    image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'chinup-dip-tower',
    sku: 'IF-TWR-VKR',
    name: 'Multi-Grip Chin-Up & Dip Tower',
    category: 'Benches & Racks',
    price: 24900,
    specBadge: '205 kg / Compact Base',
    rating: 4.7,
    reviews: 109,
    dimensions: '117 cm L × 107 cm W × 216 cm H',
    capacity: '205 kg (450 lb) Bodyweight + Weighted Belt Rating',
    finish: '11-Gauge Steel + Knurled 32 mm Grips',
    warranty: '10-Year Structural Frame Warranty',
    description: 'Freestanding vertical knee-raise, dip, and pull-up station with angled ergonomic forearm pads, neutral/wide knurled pull-up handles, and push-up base anchors.',
    image: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 'plate-loaded-lat-row',
    sku: 'IF-LAT-PL2',
    name: 'Plate-Loaded Lat Pulldown & Low Row',
    category: 'Strength',
    price: 69500,
    specBadge: '225 kg / Dual Pulley',
    rating: 4.9,
    reviews: 121,
    dimensions: '163 cm L × 81 cm W × 211 cm H',
    capacity: '225 kg (500 lb) Dual-Horn Plate Carriage',
    finish: 'Chrome Guide Rails + Sealed Aluminum Pulleys',
    warranty: '10-Year Frame / 5-Year Cables & Pulleys',
    description: 'Seamless upper-back builder transitioning from high lat pulldowns to seated low rows with zero cable changes, oversized thigh rollers, and knurled lat bar.',
    image: 'https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&w=900&q=80'
  }
];

const CATEGORIES = ['All', 'Strength', 'Cardio', 'Free Weights & Bars', 'Benches & Racks', 'Conditioning'];
const FREE_FREIGHT_THRESHOLD = 85000;
const STANDARD_FREIGHT_COST = 4500;
const TAX_RATE = 0.12;
const STORAGE_KEY = 'jimboy_equipments_ph_cart_v1';
const USER_STORAGE_KEY = 'jimboy_equipments_ph_user_v1';

/**
 * 2. APPLICATION STATE
 */
const state = {
  selectedCategory: 'All',
  searchQuery: '',
  sortBy: 'featured',
  cart: [], // Array of { id, qty }
  promoCode: null, // 'IRON10' (10% off), 'PHILIPPINE5' (5% off), or 'MANILA5' (5% off)
  quickViewProductId: null,
  quickViewQty: 1,
  currentUser: null // { name, email, tier, orders: [] }
};

/**
 * 3. INITIALIZATION & LOCALSTORAGE PERSISTENCE
 */
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  loadUserFromStorage();
  renderAuthNav();
  renderCategoryPills();
  renderCatalog();
  renderCart();

  // Bind live search input listener
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value.trim();
    document.getElementById('clearSearchBtn').classList.toggle('hidden', state.searchQuery.length === 0);
    renderCatalog();
  });

  // Close modals/drawers on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeQuickView();
      closeCart();
      closeCheckoutModal();
      closeAuthModal();
    }
  });
});

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed.cart)) {
        state.cart = parsed.cart.filter(item => PRODUCTS.some(p => p.id === item.id) && item.qty > 0);
      }
      if (parsed.promoCode === 'IRON10' || parsed.promoCode === 'PHILIPPINE5' || parsed.promoCode === 'MANILA5') {
        state.promoCode = parsed.promoCode;
      }
    }
  } catch (err) {
    console.warn('Could not load cart from localStorage:', err);
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      cart: state.cart,
      promoCode: state.promoCode
    }));
  } catch (err) {
    console.warn('Could not save cart to localStorage:', err);
  }
}

function loadUserFromStorage() {
  try {
    const savedUser = localStorage.getItem(USER_STORAGE_KEY);
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      if (parsed && parsed.email && parsed.name) {
        state.currentUser = {
          name: parsed.name,
          email: parsed.email,
          tier: parsed.tier || 'ATHLETE MEMBER',
          orders: Array.isArray(parsed.orders) ? parsed.orders : []
        };
      }
    }
  } catch (err) {
    console.warn('Could not load user session from localStorage:', err);
  }
}

function saveUserToStorage() {
  try {
    if (state.currentUser) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(state.currentUser));
    } else {
      localStorage.removeItem(USER_STORAGE_KEY);
    }
  } catch (err) {
    console.warn('Could not save user session to localStorage:', err);
  }
}

/**
 * 4. FILTERING, SORTING & CATALOG RENDERING
 */
function selectCategory(category) {
  state.selectedCategory = category;
  renderCategoryPills();
  updateNavHighlight();
  renderCatalog();
}

function selectCategoryFromNav(category) {
  selectCategory(category);
  const catalog = document.getElementById('catalogSection');
  if (catalog) {
    catalog.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateNavHighlight() {
  document.querySelectorAll('.nav-cat-btn').forEach(btn => {
    const cat = btn.getAttribute('data-nav-cat');
    const isActive = cat === state.selectedCategory;
    if (btn.classList.contains('shrink-0')) {
      // Mobile pill button
      btn.className = isActive
        ? 'nav-cat-btn shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-zinc-950 transition'
        : 'nav-cat-btn shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800 transition';
    } else {
      // Desktop nav button
      btn.className = isActive
        ? 'nav-cat-btn px-3.5 py-2 rounded-lg text-sm font-semibold text-amber-400 bg-zinc-800 transition'
        : 'nav-cat-btn px-3.5 py-2 rounded-lg text-sm font-semibold text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition';
    }
  });
}

function renderCategoryPills() {
  const container = document.getElementById('categoryPillsContainer');
  container.innerHTML = CATEGORIES.map(cat => {
    const isActive = state.selectedCategory === cat;
    const count = cat === 'All'
      ? PRODUCTS.length
      : PRODUCTS.filter(p => p.category === cat).length;

    const label = cat === 'All' ? 'All Equipment' : cat;

    return `
      <button
        type="button"
        role="tab"
        aria-selected="${isActive}"
        onclick="selectCategory('${cat}')"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition cursor-pointer ${
          isActive
            ? 'bg-zinc-950 text-white shadow-md ring-2 ring-amber-500/40'
            : 'bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-100'
        }"
      >
        <span>${label}</span>
        <span class="text-xs px-1.5 py-0.5 rounded-md ${
          isActive ? 'bg-amber-500 text-zinc-950' : 'bg-zinc-100 text-zinc-500'
        }">${count}</span>
      </button>
    `;
  }).join('');
}

function handleSortChange(value) {
  state.sortBy = value;
  renderCatalog();
}

function clearSearch() {
  const input = document.getElementById('searchInput');
  input.value = '';
  state.searchQuery = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  renderCatalog();
}

function resetFilters(event) {
  if (event) event.preventDefault();
  state.selectedCategory = 'All';
  state.searchQuery = '';
  state.sortBy = 'featured';
  document.getElementById('searchInput').value = '';
  document.getElementById('clearSearchBtn').classList.add('hidden');
  document.getElementById('sortSelect').value = 'featured';
  renderCategoryPills();
  updateNavHighlight();
  renderCatalog();
}

function getFilteredProducts() {
  const query = state.searchQuery.toLowerCase();

  let list = PRODUCTS.filter(product => {
    const matchesCat = state.selectedCategory === 'All' || product.category === state.selectedCategory;
    const matchesQuery = !query ||
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.specBadge.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  if (state.sortBy === 'price-asc') {
    list = [...list].sort((a, b) => a.price - b.price);
  } else if (state.sortBy === 'price-desc') {
    list = [...list].sort((a, b) => b.price - a.price);
  }

  return list;
}

function renderCatalog() {
  const grid = document.getElementById('productGrid');
  const emptyState = document.getElementById('emptyCatalogState');
  const counter = document.getElementById('resultsCounter');
  const filtered = getFilteredProducts();

  counter.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'piece' : 'pieces'} of commercial-rated equipment`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    emptyState.classList.remove('hidden');
    return;
  }

  emptyState.classList.add('hidden');

  grid.innerHTML = filtered.map(product => {
    return `
      <article class="group bg-white rounded-2xl border border-zinc-200/90 hover:border-amber-500/70 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col overflow-hidden">
        <!-- Dark Industrial Photographic Product Frame -->
        <div class="relative bg-zinc-950 aspect-[16/11] overflow-hidden">
          <!-- High-Resolution Product Photography -->
          <img
            src="${product.image}"
            alt="${product.name}"
            data-category="${product.category}"
            loading="lazy"
            onerror="handleImageError(this)"
            onclick="openQuickView('${product.id}')"
            class="w-full h-full object-cover object-center cursor-pointer transform group-hover:scale-105 transition-transform duration-500"
          />

          <!-- Subtle Dark Gradient Vignette for Crisp Badge Contrast -->
          <div
            onclick="openQuickView('${product.id}')"
            class="absolute inset-0 bg-gradient-to-t from-zinc-950/85 via-zinc-950/20 to-zinc-950/55 cursor-pointer"
          ></div>

          <!-- Top Badges -->
          <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
            <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-zinc-950/85 backdrop-blur-xs text-zinc-200 border border-zinc-700/80">
              ${product.category}
            </span>
            <span class="text-[11px] font-mono font-bold px-2.5 py-1 rounded-lg bg-zinc-950/85 backdrop-blur-xs text-amber-400 border border-amber-500/40">
              ${product.specBadge}
            </span>
          </div>

          <!-- Bottom SKU & Quick Specs Trigger -->
          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            <span class="text-[10px] font-mono font-semibold text-zinc-300 bg-zinc-950/75 px-2 py-1 rounded-md border border-zinc-800">
              ${product.sku}
            </span>
            <button
              type="button"
              onclick="openQuickView('${product.id}')"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950/90 hover:bg-amber-500 text-zinc-100 hover:text-zinc-950 border border-zinc-700 hover:border-amber-500 text-xs font-bold transition shadow-md cursor-pointer"
            >
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span>Quick Specs</span>
            </button>
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <!-- Star Rating -->
            <div class="flex items-center gap-1.5 text-xs mb-1.5">
              <div class="flex items-center text-amber-500" aria-label="${product.rating} out of 5 stars">
                ★★★★★
              </div>
              <span class="font-bold text-zinc-800">${product.rating.toFixed(1)}</span>
              <span class="text-zinc-400">(${product.reviews})</span>
            </div>

            <!-- Product Title -->
            <h3
              onclick="openQuickView('${product.id}')"
              class="font-bold text-zinc-900 text-base leading-snug group-hover:text-amber-600 transition cursor-pointer"
            >
              ${product.name}
            </h3>

            <p class="text-xs text-zinc-500 mt-1.5 line-clamp-2">
              ${product.description}
            </p>
          </div>

          <!-- Price & Add to Cart Button -->
          <div class="mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
            <div>
              <span class="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Direct Price</span>
              <span class="text-xl font-extrabold text-zinc-900">${formatCurrency(product.price)}</span>
            </div>

            <button
              type="button"
              id="addBtn-${product.id}"
              onclick="addToCart('${product.id}', 1, this)"
              class="inline-flex items-center justify-center gap-1.5 bg-zinc-950 hover:bg-amber-500 text-white hover:text-zinc-950 font-bold text-xs uppercase tracking-wider px-4 py-3 rounded-xl transition-colors duration-200 shadow-sm cursor-pointer"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

/**
 * 5. QUICK-VIEW / ENGINEERING SPECS MODAL LOGIC
 */
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.quickViewProductId = product.id;
  state.quickViewQty = 1;

  document.getElementById('qvCategoryBadge').textContent = product.category;
  document.getElementById('qvSku').textContent = product.sku;
  document.getElementById('qvIllustration').innerHTML = `
    <img
      src="${product.image}"
      alt="${product.name}"
      data-category="${product.category}"
      onerror="handleImageError(this)"
      class="w-full h-full object-cover object-center"
    />
    <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent pointer-events-none"></div>
  `;
  document.getElementById('qvRating').innerHTML = `<span class="text-amber-500">★</span> ${product.rating.toFixed(1)} (${product.reviews} Verified Builds)`;
  document.getElementById('qvTitle').textContent = product.name;
  document.getElementById('qvPrice').textContent = formatCurrency(product.price);
  document.getElementById('qvSpecPill').textContent = product.specBadge;
  document.getElementById('qvDescription').textContent = product.description;
  document.getElementById('qvDimensions').textContent = product.dimensions;
  document.getElementById('qvCapacity').textContent = product.capacity;
  document.getElementById('qvFinish').textContent = product.finish;
  document.getElementById('qvWarranty').textContent = product.warranty;
  document.getElementById('qvQtyDisplay').textContent = '1';

  const modal = document.getElementById('quickViewModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeQuickView() {
  const modal = document.getElementById('quickViewModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  state.quickViewProductId = null;
}

function changeQuickViewQty(delta) {
  state.quickViewQty = Math.max(1, Math.min(20, state.quickViewQty + delta));
  document.getElementById('qvQtyDisplay').textContent = String(state.quickViewQty);
}

function addFromQuickView() {
  if (!state.quickViewProductId) return;
  addToCart(state.quickViewProductId, state.quickViewQty);
  closeQuickView();
  openCart();
}

/**
 * 6. SHOPPING CART DRAWER, PROMO CODES & FREIGHT CALCULATIONS
 */
function addToCart(productId, qty = 1, buttonEl = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = state.cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ id: productId, qty });
  }

  saveCartToStorage();
  renderCart();

  // Visual button confirmation feedback
  if (buttonEl) {
    const originalHTML = buttonEl.innerHTML;
    buttonEl.classList.remove('bg-zinc-950', 'hover:bg-amber-500', 'text-white');
    buttonEl.classList.add('bg-emerald-600', 'text-white');
    buttonEl.innerHTML = `
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
      <span>Added</span>
    `;
    setTimeout(() => {
      buttonEl.classList.remove('bg-emerald-600');
      buttonEl.classList.add('bg-zinc-950', 'hover:bg-amber-500', 'text-white');
      buttonEl.innerHTML = originalHTML;
    }, 900);
  }

  // Pulse cart badge
  const badge = document.getElementById('cartBadge');
  badge.classList.add('scale-125');
  setTimeout(() => badge.classList.remove('scale-125'), 220);

  showToast(`Added ${qty}× ${product.name} to your gym build.`);
}

function updateCartItemQty(productId, delta) {
  const idx = state.cart.findIndex(item => item.id === productId);
  if (idx === -1) return;

  state.cart[idx].qty += delta;
  if (state.cart[idx].qty <= 0) {
    state.cart.splice(idx, 1);
  }

  saveCartToStorage();
  renderCart();
}

function removeCartItem(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  saveCartToStorage();
  renderCart();
}

function applyPromoCode(event) {
  event.preventDefault();
  const input = document.getElementById('promoInput');
  const code = input.value.trim().toUpperCase();
  const feedback = document.getElementById('promoFeedback');
  const msg = document.getElementById('promoMessage');

  if (!code) return;

  if (code === 'IRON10' || code === 'PHILIPPINE5' || code === 'MANILA5') {
    state.promoCode = code;
    saveCartToStorage();
    renderCart();
    input.value = '';
    const pctLabel = code === 'IRON10' ? '10%' : '5%';
    feedback.classList.remove('hidden', 'text-red-600');
    feedback.classList.add('text-emerald-600');
    msg.textContent = `✓ Code ${code} applied (${pctLabel} off equipment)`;
    showToast(`Promo code ${code} applied: ${pctLabel} discount unlocked!`);
  } else {
    feedback.classList.remove('hidden', 'text-emerald-600');
    feedback.classList.add('text-red-600');
    msg.textContent = 'Invalid code. Try IRON10 (10% off), PHILIPPINE5 (5% off), or MANILA5 (5% off).';
  }
}

function removePromoCode() {
  state.promoCode = null;
  saveCartToStorage();
  document.getElementById('promoFeedback').classList.add('hidden');
  renderCart();
}

function calculateCartTotals() {
  let subtotal = 0;
  let totalItems = 0;

  state.cart.forEach(item => {
    const product = PRODUCTS.find(p => p.id === item.id);
    if (product) {
      subtotal += product.price * item.qty;
      totalItems += item.qty;
    }
  });

  const discountRate = state.promoCode === 'IRON10'
    ? 0.10
    : ((state.promoCode === 'PHILIPPINE5' || state.promoCode === 'MANILA5') ? 0.05 : 0);
  const discount = subtotal * discountRate;
  const discountedSubtotal = Math.max(0, subtotal - discount);
  const qualifiesFreeFreight = subtotal >= FREE_FREIGHT_THRESHOLD;
  const shipping = subtotal === 0 ? 0 : (qualifiesFreeFreight ? 0 : STANDARD_FREIGHT_COST);
  const tax = discountedSubtotal * TAX_RATE;
  const total = discountedSubtotal + shipping + tax;

  return {
    subtotal,
    discount,
    discountedSubtotal,
    shipping,
    tax,
    total,
    totalItems,
    qualifiesFreeFreight
  };
}

function renderCart() {
  const container = document.getElementById('cartItemsContainer');
  const totals = calculateCartTotals();

  // Update Header & Drawer Item Count Badges
  document.getElementById('cartBadge').textContent = String(totals.totalItems);
  document.getElementById('drawerItemCount').textContent = String(totals.totalItems);

  // Update Free Freight Progress Bar (₱85,000 threshold)
  const progressPct = Math.min(100, Math.round((totals.subtotal / FREE_FREIGHT_THRESHOLD) * 100));
  document.getElementById('freightProgressBar').style.width = `${progressPct}%`;
  document.getElementById('freightPercentText').textContent = `${progressPct}%`;

  const statusText = document.getElementById('freightStatusText');
  if (totals.qualifiesFreeFreight) {
    statusText.innerHTML = `<span class="text-emerald-400 font-bold">✓ UNLOCKED:</span> Free Philippine LTL Freight!`;
  } else {
    const remaining = FREE_FREIGHT_THRESHOLD - totals.subtotal;
    statusText.innerHTML = `Add <strong class="text-[#FF4D00]">${formatCurrency(remaining)}</strong> more for <strong class="text-white">FREE LTL Freight</strong>`;
  }

  // Render Cart Items or Empty State
  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center py-12">
        <div class="w-16 h-16 rounded-2xl bg-zinc-100 text-zinc-400 flex items-center justify-center mb-4">
          <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
        </div>
        <h3 class="text-base font-bold text-zinc-900">Your Gym Build is Empty</h3>
        <p class="text-xs text-zinc-500 max-w-xs mt-1">
          Add barbells, power racks, or conditioning machines from our catalog to calculate Philippine LTL freight and build totals.
        </p>
        <button
          type="button"
          onclick="closeCart()"
          class="mt-5 px-5 py-2.5 rounded-xl bg-[#0B0D10] text-white text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition cursor-pointer"
        >
          Browse Equipment
        </button>
      </div>
    `;
  } else {
    container.innerHTML = state.cart.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return '';
      return `
        <div class="flex gap-3.5 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
          <div class="w-20 h-20 rounded-xl bg-zinc-950 overflow-hidden shrink-0 border border-zinc-800">
            <img
              src="${product.image}"
              alt="${product.name}"
              data-category="${product.category}"
              onerror="handleImageError(this)"
              class="w-full h-full object-cover object-center"
            />
          </div>
          <div class="flex-1 min-w-0 flex flex-col justify-between">
            <div class="flex items-start justify-between gap-2">
              <div>
                <h4 class="text-sm font-bold text-zinc-900 leading-tight truncate">${product.name}</h4>
                <span class="text-[11px] font-mono text-zinc-500">${product.specBadge}</span>
              </div>
              <button
                type="button"
                onclick="removeCartItem('${product.id}')"
                aria-label="Remove ${product.name}"
                class="text-zinc-400 hover:text-red-600 p-1 transition cursor-pointer"
                title="Remove item"
              >
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
              </button>
            </div>

            <div class="flex items-center justify-between mt-2">
              <div class="inline-flex items-center border border-zinc-300 rounded-lg bg-white">
                <button
                  type="button"
                  onclick="updateCartItemQty('${product.id}', -1)"
                  aria-label="Decrease quantity"
                  class="w-7 h-7 flex items-center justify-center text-zinc-700 hover:bg-zinc-100 font-bold text-sm cursor-pointer"
                >&minus;</button>
                <span class="px-2.5 text-xs font-bold text-zinc-900">${item.qty}</span>
                <button
                  type="button"
                  onclick="updateCartItemQty('${product.id}', 1)"
                  aria-label="Increase quantity"
                  class="w-7 h-7 flex items-center justify-center text-zinc-700 hover:bg-zinc-100 font-bold text-sm cursor-pointer"
                >+</button>
              </div>
              <span class="text-sm font-extrabold text-zinc-900">
                ${formatCurrency(product.price * item.qty)}
              </span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Update Summary Figures
  document.getElementById('cartSubtotal').textContent = formatCurrency(totals.subtotal);

  const discountRow = document.getElementById('discountRow');
  const promoFeedback = document.getElementById('promoFeedback');
  if (state.promoCode && totals.subtotal > 0) {
    const pctLabel = state.promoCode === 'IRON10' ? '10%' : '5%';
    discountRow.classList.remove('hidden');
    document.getElementById('activePromoLabel').textContent = state.promoCode;
    document.getElementById('cartDiscount').textContent = `-${formatCurrency(totals.discount)}`;
    promoFeedback.classList.remove('hidden', 'text-red-600');
    promoFeedback.classList.add('text-emerald-600');
    document.getElementById('promoMessage').textContent = `✓ Code ${state.promoCode} applied (${pctLabel} off equipment)`;
  } else {
    discountRow.classList.add('hidden');
  }

  const shippingEl = document.getElementById('cartShipping');
  if (totals.subtotal === 0) {
    shippingEl.textContent = '₱0';
    shippingEl.className = 'font-semibold text-zinc-900';
  } else if (totals.qualifiesFreeFreight) {
    shippingEl.textContent = 'FREE (₱0)';
    shippingEl.className = 'font-bold text-emerald-600';
  } else {
    shippingEl.textContent = formatCurrency(totals.shipping);
    shippingEl.className = 'font-semibold text-zinc-900';
  }

  document.getElementById('cartTax').textContent = formatCurrency(totals.tax);
  document.getElementById('cartTotal').textContent = formatCurrency(totals.total);

  // Enable/disable checkout trigger
  document.getElementById('checkoutTriggerBtn').disabled = state.cart.length === 0;
}

function openCart() {
  const backdrop = document.getElementById('cartBackdrop');
  const drawer = document.getElementById('cartDrawer');
  backdrop.classList.remove('hidden');
  requestAnimationFrame(() => {
    backdrop.classList.remove('opacity-0');
    drawer.classList.remove('translate-x-full');
  });
}

function closeCart() {
  const backdrop = document.getElementById('cartBackdrop');
  const drawer = document.getElementById('cartDrawer');
  backdrop.classList.add('opacity-0');
  drawer.classList.add('translate-x-full');
  setTimeout(() => {
    backdrop.classList.add('hidden');
  }, 300);
}

/**
 * 7. MULTI-STEP CHECKOUT MODAL & ORDER CONFIRMATION
 */
function openCheckoutModal() {
  if (state.cart.length === 0) return;
  closeCart();

  // Auto-fill signed-in user's name & email if available
  if (state.currentUser) {
    const nameInput = document.getElementById('chkName');
    const emailInput = document.getElementById('chkEmail');
    if (!nameInput.value) nameInput.value = state.currentUser.name;
    if (!emailInput.value) emailInput.value = state.currentUser.email;
  }

  // Reset to Step 1
  setCheckoutStep(1);
  document.getElementById('step1Error').classList.add('hidden');
  document.getElementById('step2Error').classList.add('hidden');

  const modal = document.getElementById('checkoutModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function setCheckoutStep(step) {
  document.getElementById('checkoutStep1Form').classList.toggle('hidden', step !== 1);
  document.getElementById('checkoutStep2Form').classList.toggle('hidden', step !== 2);
  document.getElementById('checkoutStep3Confirmation').classList.toggle('hidden', step !== 3);

  // Update Stepper Styling
  [1, 2, 3].forEach(num => {
    const el = document.getElementById(`stepIndicator${num}`);
    const circle = el.querySelector('span');
    if (num <= step) {
      el.classList.remove('text-zinc-400');
      el.classList.add('text-zinc-900');
      circle.classList.remove('bg-zinc-200', 'text-zinc-600');
      circle.classList.add('bg-[#FF4D00]', 'text-white');
    } else {
      el.classList.add('text-zinc-400');
      el.classList.remove('text-zinc-900');
      circle.classList.add('bg-zinc-200', 'text-zinc-600');
      circle.classList.remove('bg-[#FF4D00]', 'text-white');
    }
  });
}

function goToCheckoutStep2(event) {
  event.preventDefault();
  const name = document.getElementById('chkName').value.trim();
  const email = document.getElementById('chkEmail').value.trim();
  const phone = document.getElementById('chkPhone').value.trim();
  const region = document.getElementById('chkRegion').value;
  const address = document.getElementById('chkAddress').value.trim();
  const city = document.getElementById('chkCity').value.trim();
  const stateVal = document.getElementById('chkState').value.trim();
  const zip = document.getElementById('chkZip').value.trim();
  const errorEl = document.getElementById('step1Error');

  if (!name || !email.includes('@') || !phone || !address || !city || !stateVal || !zip) {
    errorEl.textContent = 'Please complete all required Philippine freight delivery fields.';
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  const totals = calculateCartTotals();
  document.getElementById('chkSummaryTotal').textContent = formatCurrency(totals.total);
  document.getElementById('chkSummaryShipTo').textContent = `Shipping to: ${address}, ${city}, ${stateVal} ${zip} (${region})`;

  // Pre-fill cardholder name if empty
  const cardNameInput = document.getElementById('chkCardName');
  if (!cardNameInput.value) cardNameInput.value = name;

  setCheckoutStep(2);
}

function backToCheckoutStep1() {
  setCheckoutStep(1);
}

function submitFinalOrder(event) {
  event.preventDefault();
  const cardName = document.getElementById('chkCardName').value.trim();
  const cardNum = document.getElementById('chkCardNumber').value.replace(/\s+/g, '');
  const cardExp = document.getElementById('chkCardExp').value.trim();
  const cardCvc = document.getElementById('chkCardCvc').value.trim();
  const errorEl = document.getElementById('step2Error');

  if (!cardName || cardNum.length < 13 || cardExp.length < 4 || cardCvc.length < 3) {
    errorEl.textContent = 'Please enter valid payment card details to complete your order.';
    errorEl.classList.remove('hidden');
    return;
  }

  errorEl.classList.add('hidden');
  const totals = calculateCartTotals();
  const orderNum = 'JB-PH-' + Math.floor(10000 + Math.random() * 90000);
  const deliveryMethod = document.getElementById('chkDeliveryType').value;

  // Record order into signed-in member's account history
  if (state.currentUser) {
    const itemSummary = state.cart.map(item => {
      const prod = PRODUCTS.find(p => p.id === item.id);
      return prod ? `${item.qty}× ${prod.name}` : '';
    }).filter(Boolean).join(', ');

    state.currentUser.orders.unshift({
      orderNumber: orderNum,
      date: new Date().toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' }),
      total: totals.total,
      itemCount: totals.totalItems,
      summary: itemSummary,
      status: 'Scheduled for LTL Dispatch'
    });
    saveUserToStorage();
  }

  // Populate Confirmation Screen
  document.getElementById('confirmedOrderNumber').textContent = orderNum;
  document.getElementById('confirmedCustomerName').textContent = document.getElementById('chkName').value.trim();
  document.getElementById('confirmedCustomerEmail').textContent = document.getElementById('chkEmail').value.trim();
  document.getElementById('confirmedDeliveryMethod').textContent = deliveryMethod;
  document.getElementById('confirmedAmountCharged').textContent = formatCurrency(totals.total);

  // Clear Cart & Storage upon order placement
  state.cart = [];
  state.promoCode = null;
  saveCartToStorage();
  renderCart();

  setCheckoutStep(3);
}

/**
 * 8. SIGN IN / CREATE ACCOUNT & MEMBER PROFILE LOGIC
 */
function handleAuthNavClick() {
  openAuthModal();
}

function openAuthModal() {
  const modal = document.getElementById('authModal');
  renderAuthModalState();
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function switchAuthTab(tab) {
  const isSignIn = tab === 'signin';
  document.getElementById('signInForm').classList.toggle('hidden', !isSignIn);
  document.getElementById('registerForm').classList.toggle('hidden', isSignIn);
  document.getElementById('signInError').classList.add('hidden');
  document.getElementById('registerError').classList.add('hidden');

  const signInBtn = document.getElementById('tabSignInBtn');
  const regBtn = document.getElementById('tabRegisterBtn');

  if (isSignIn) {
    signInBtn.className = 'py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider bg-[#0B0D10] text-white shadow-xs transition cursor-pointer';
    regBtn.className = 'py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider text-zinc-600 hover:text-zinc-900 transition cursor-pointer';
  } else {
    regBtn.className = 'py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider bg-[#0B0D10] text-white shadow-xs transition cursor-pointer';
    signInBtn.className = 'py-2 rounded-lg text-xs font-extrabold uppercase tracking-wider text-zinc-600 hover:text-zinc-900 transition cursor-pointer';
  }
}

function handleSignInSubmit(event) {
  event.preventDefault();
  const email = document.getElementById('signInEmail').value.trim();
  const password = document.getElementById('signInPassword').value.trim();
  const errEl = document.getElementById('signInError');

  if (!email.includes('@') || password.length < 4) {
    errEl.textContent = 'Please enter a valid email and password.';
    errEl.classList.remove('hidden');
    return;
  }

  errEl.classList.add('hidden');
  const derivedName = email.split('@')[0]
    .replace(/[._-]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());

  state.currentUser = {
    name: derivedName,
    email,
    tier: 'ATHLETE MEMBER',
    orders: state.currentUser && state.currentUser.email === email ? state.currentUser.orders : []
  };

  saveUserToStorage();
  renderAuthNav();
  renderAuthModalState();
  showToast(`Signed in as ${state.currentUser.name}`);
}

function handleRegisterSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const errEl = document.getElementById('registerError');

  if (!name || !email.includes('@') || password.length < 6) {
    errEl.textContent = 'Please fill out all fields (password minimum 6 characters).';
    errEl.classList.remove('hidden');
    return;
  }

  errEl.classList.add('hidden');
  state.currentUser = {
    name,
    email,
    tier: 'COMMERCIAL PRO TIER',
    orders: []
  };

  saveUserToStorage();
  renderAuthNav();
  renderAuthModalState();
  showToast(`Welcome to JIMBOY EQUIPMENTS, ${name}!`);
}

function loginAsDemoMember() {
  state.currentUser = {
    name: 'Juan Dela Cruz',
    email: 'juan.delacruz@ironforge.ph',
    tier: 'BLACK IRON VIP',
    orders: [
      {
        orderNumber: 'IF-PH-74210',
        date: 'Oct 14, 2026',
        total: 48300,
        itemCount: 2,
        summary: '1× Apex 20kg Olympic Barbell, 1× IronCast Competition Kettlebell Set (8–24kg)',
        status: 'Delivered • Metro Manila'
      }
    ]
  };

  saveUserToStorage();
  renderAuthNav();
  renderAuthModalState();
  showToast('Signed in with Demo VIP Account (Juan Dela Cruz)');
}

function signOutUser() {
  state.currentUser = null;
  saveUserToStorage();
  renderAuthNav();
  closeAuthModal();
  showToast('Signed out of your IRONFORGE account.');
}

function getUserInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0].toUpperCase())
    .join('') || 'IF';
}

function renderAuthNav() {
  const labelEl = document.getElementById('authNavLabel');
  const avatarEl = document.getElementById('authNavAvatar');
  const btnEl = document.getElementById('authNavBtn');

  if (state.currentUser) {
    const firstName = state.currentUser.name.split(' ')[0];
    labelEl.textContent = firstName;
    avatarEl.textContent = getUserInitials(state.currentUser.name);
    avatarEl.className = 'w-6 h-6 rounded-full bg-[#FF4D00] text-white flex items-center justify-center text-[11px] font-extrabold';
    btnEl.classList.add('border-[#FF4D00]/70');
  } else {
    labelEl.textContent = 'Sign In';
    avatarEl.className = 'w-5 h-5 rounded-full bg-[#FF4D00]/20 text-[#FF4D00] flex items-center justify-center text-xs font-extrabold';
    avatarEl.innerHTML = `
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
    `;
    btnEl.classList.remove('border-[#FF4D00]/70');
  }
}

function renderAuthModalState() {
  const loggedOutView = document.getElementById('authLoggedOutView');
  const loggedInView = document.getElementById('authLoggedInView');

  if (!state.currentUser) {
    loggedOutView.classList.remove('hidden');
    loggedInView.classList.add('hidden');
    switchAuthTab('signin');
    return;
  }

  loggedOutView.classList.add('hidden');
  loggedInView.classList.remove('hidden');

  document.getElementById('profileInitials').textContent = getUserInitials(state.currentUser.name);
  document.getElementById('profileDisplayName').textContent = state.currentUser.name;
  document.getElementById('profileDisplayEmail').textContent = state.currentUser.email;
  document.getElementById('profileTierBadge').textContent = state.currentUser.tier;

  const orders = state.currentUser.orders || [];
  document.getElementById('orderHistoryCount').textContent = `${orders.length} ${orders.length === 1 ? 'Order' : 'Orders'}`;

  const listEl = document.getElementById('orderHistoryList');
  if (orders.length === 0) {
    listEl.innerHTML = `
      <div class="rounded-xl border border-dashed border-zinc-300 p-4 text-center text-xs text-zinc-500">
        No orders placed yet under this account. Complete a checkout to track your LTL shipments here.
      </div>
    `;
  } else {
    listEl.innerHTML = orders.map(order => `
      <div class="rounded-xl bg-zinc-50 border border-zinc-200 p-3.5 text-xs space-y-1.5">
        <div class="flex items-center justify-between">
          <span class="font-mono font-bold text-zinc-900">${order.orderNumber}</span>
          <span class="font-extrabold text-zinc-900">${formatCurrency(order.total)}</span>
        </div>
        <p class="text-zinc-600 line-clamp-2">${order.summary}</p>
        <div class="flex items-center justify-between text-[11px] pt-1 border-t border-zinc-200/80">
          <span class="text-zinc-400">${order.date}</span>
          <span class="font-semibold text-emerald-700">${order.status}</span>
        </div>
      </div>
    `).join('');
  }
}

/**
 * 9. UTILITIES & INPUT FORMATTERS
 */
function formatCurrency(amount) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(Math.round(amount));
}

function formatCardNumber(input) {
  let digits = input.value.replace(/\D/g, '').substring(0, 16);
  input.value = digits.replace(/(\d{4})(?=\d)/g, '$1 ');
}

function formatCardExp(input) {
  let digits = input.value.replace(/\D/g, '').substring(0, 4);
  if (digits.length >= 3) {
    input.value = digits.substring(0, 2) + '/' + digits.substring(2);
  } else {
    input.value = digits;
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'animate-toast bg-zinc-950 text-white border border-zinc-800 px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold max-w-sm';
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}
