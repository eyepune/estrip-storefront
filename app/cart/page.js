

export const metadata = {
  title: 'Shopping Cart | E-strip',
};

export default function PageComponent() {
  return (
    <div className="bg-background min-h-screen text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
      
      {/* Desktop View */}
      <div className="hidden md:block">
        <main className="max-w-7xl mx-auto px-6 py-12">
<h1 className="text-4xl md:text-5xl font-black text-primary mb-12 tracking-tight">Your Cart <span className="text-secondary opacity-50">(2)</span></h1>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

<div className="lg:col-span-2 space-y-6">

<div className="bg-surface-container-lowest p-6 rounded-lg card-shadow flex flex-col sm:flex-row gap-6 bouncy-hover border-2 border-transparent hover:border-primary-fixed-dim transition-all">
<div className="w-full sm:w-32 h-32 bg-primary-fixed rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="A vibrant, studio product photograph of a sleek eco-friendly package of e-strip SmartClean 3X Laundry Sheets. The packaging is minimalist white with hot pink and purple typography, sitting on a soft pink surface with playful bubble textures and bright, high-key lighting. The scene is joyful, energetic, and clean, emphasizing a modern sustainable lifestyle." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRwv8jJxBPwDqMyIvXCfXPPern5tiMA1Zy7LDbFyq5tDhxPSK_Va1iGQKJmCpm7-7Lb1cbHI3FxEdSbOCXsxjgAEUiaOrX88SyjHmfBRBe2BoNfyvOi2cJu4laKgVNNpaQGJAsxEIHFwD30HjLuaB_sW4DAz1FrlBv82hKJQMQW4JqJARKHW_q-kSRY3zoMX9xrQBFcVsBFxxVdDF19OivqfCYmYIdxIkbfAXY6ZtdjxoRdPUoZPpCJUeoegrydHJmya1J7G564f7J" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-bold text-on-surface">SmartClean 3X Laundry Sheets</h3>
<p className="text-on-surface-variant text-sm mt-1">60 Loads • Fresh Linen Scent</p>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
<div className="flex justify-between items-end mt-6">
<div className="flex items-center bg-surface-container rounded-full p-1 border border-outline-variant">
<button className="w-8 h-8 flex items-center justify-center text-primary font-bold hover:bg-surface-variant rounded-full transition-colors">-</button>
<span className="w-10 text-center font-bold">1</span>
<button className="w-8 h-8 flex items-center justify-center text-primary font-bold hover:bg-surface-variant rounded-full transition-colors">+</button>
</div>
<div className="text-right">
<p className="text-lg font-black text-primary">$18.00</p>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-6 rounded-lg card-shadow flex flex-col sm:flex-row gap-6 bouncy-hover border-2 border-transparent hover:border-primary-fixed-dim transition-all">
<div className="w-full sm:w-32 h-32 bg-secondary-fixed rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover" data-alt="A professional close-up shot of e-strip Baby Laundry Sheets packaging. The design features soft purple tones with playful illustrated baby animal motifs. The package rests on a soft, plush white blanket, illuminated by warm, diffused morning sunlight. The overall aesthetic is gentle, safe, and premium, using the Candy design system's purple accent colors." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOOnqLTL9spXzXJJmy3iSecDkJ5lCTuvgxb5rgu2aZEjm9XNT3W_VYqjP_J-7sIPP2D_VQmEYdvuOWGhhfi6MbPung3FyfSY80L87S1SxJkjqb3ZTO1zvLnfazaRToTaCyiGfJz2mF4dfTuz1Y2QCKq2S5tM8lwW4lgq1QJkErm-hlZQRq97nH_WSyBrfYiYwJPpDyJPkcvu1nIOhATI3xiULx7Jhcz2yF-2EzMkt8rth2N2p3thvIkhUnpDLNIvXPTHU-EemCxI0Z" />
</div>
<div className="flex-grow">
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-bold text-on-surface">Baby Laundry Sheets</h3>
<p className="text-on-surface-variant text-sm mt-1">40 Loads • Hypoallergenic • Unscented</p>
</div>
<button className="text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
<div className="flex justify-between items-end mt-6">
<div className="flex items-center bg-surface-container rounded-full p-1 border border-outline-variant">
<button className="w-8 h-8 flex items-center justify-center text-primary font-bold hover:bg-surface-variant rounded-full transition-colors">-</button>
<span className="w-10 text-center font-bold">1</span>
<button className="w-8 h-8 flex items-center justify-center text-primary font-bold hover:bg-surface-variant rounded-full transition-colors">+</button>
</div>
<div className="text-right">
<p className="text-lg font-black text-primary">$22.00</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 space-y-6">
<div className="bg-surface-container-high p-8 rounded-lg card-shadow sticky top-24">
<h2 className="text-2xl font-bold text-on-surface mb-6">Order Summary</h2>
<div className="space-y-4 mb-8">
<div className="flex justify-between text-on-surface-variant">
<span className="">Subtotal</span>
<span className="font-bold text-on-surface">$40.00</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span className="">Shipping</span>
<span className="text-tertiary font-bold">Calculated at next step</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span className="">Estimated Tax</span>
<span className="font-bold text-on-surface">$0.00</span>
</div>
<div className="h-px bg-outline-variant my-4"></div>
<div className="flex justify-between text-xl font-black text-on-surface">
<span className="">Total</span>
<span className="text-primary">$40.00</span>
</div>
</div>

<div className="mb-8">
<label className="block text-sm font-bold text-on-surface mb-2">Discount Code</label>
<div className="flex gap-2">
<input className="flex-grow bg-surface-container-lowest border-2 border-outline-variant rounded-full px-4 py-2 focus:border-primary focus:ring-0 transition-all text-sm" placeholder="FREESHIP24" type="text" />
<button className="bg-secondary text-white px-4 py-2 rounded-full font-bold text-sm bouncy-hover hover:brightness-110 active:scale-95 transition-all">Apply</button>
</div>
</div>
<button className="w-full bg-primary text-white py-4 rounded-full text-lg font-black primary-shadow bouncy-hover hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2">
                        Checkout
                        <span className="material-symbols-outlined">arrow_forward</span>
</button>
<div className="mt-6 flex items-center justify-center gap-4">
<span className="material-symbols-outlined text-tertiary">lock</span>
<p className="text-xs text-on-surface-variant font-medium">Secure Checkout Guaranteed</p>
</div>
</div>
</div>
</div>

<section className="mt-24">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-black text-on-surface">You might also like</h2>
<button className="text-primary font-bold flex items-center gap-2 hover:underline">
                    View Shop <span className="material-symbols-outlined">arrow_outward</span>
</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-surface-container-lowest p-4 rounded-lg card-shadow bouncy-hover group">
<div className="aspect-square bg-tertiary-fixed rounded-lg overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A playful and vibrant product shot of eco-friendly dryer balls made of organic wool, styled with soft blue and white colors. The background features artistic water splashes and bubbles. The style is joyful and clean, using the sky blue tertiary color of the Candy design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMekhqG1cIfe--OJj-p-rAIm9cTVfN6xOLePQOtC7Nn5hM5UpX7mGM0-hB77D0u2SzGsmscz6h_86iXuQfXb244WhmlLh1YALPggyu19NqjmBrPxOBBXW5Zcc8qhZ7p55bhvh9Wj5x-hgVUbAxrGA4gqGLfaQxd2MAD45adRf0PS2mNqj0-onLI9LevOXD8SVHvYczpS5Y8JN5-OctZ1Qy02O1gV-LEklw2HjyJXh0WDuHgdn1maEk4r7mwnhfA4kNhcP6rACv9_f9" />
<button className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<h4 className="font-bold text-on-surface truncate">Wool Dryer Balls</h4>
<p className="text-primary font-black mt-1">$15.00</p>
</div>

<div className="bg-surface-container-lowest p-4 rounded-lg card-shadow bouncy-hover group">
<div className="aspect-square bg-primary-fixed rounded-lg overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A fun, colorful packaging of e-strip Stain Remover Stick. The background is a vibrant gradient of pink and orange with geometric abstract shapes. Bright, poppy studio lighting emphasizes the playful texture of the product. Modern, bold typography matches the energetic brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFy--FQZiY01NnAJyD0E33GRZ3DTBTbTxIsYDi5BcigemVv1F9sd_Xe3oHejxyuEckrtIGl3SZ2MwB67OZDmC6P8_Wk_iSe5l0czqeXFWf_T-XS8g5NpiWEWH03bRZ1x3PShMSukx7NgrfUDLrC49MysrZt7nhEVcKKjWk2X_dqos4I0ddRTWIrGKTsiPbku21MJWYLt4rjJDKyLu1wku4yXcOnrRm785ugX-MRJp3toHDr0a8cJkxyclkSszakCrjyStEPFMljRih" />
<button className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<h4 className="font-bold text-on-surface truncate">Stain Remover Stick</h4>
<p className="text-primary font-black mt-1">$12.00</p>
</div>

<div className="bg-surface-container-lowest p-4 rounded-lg card-shadow bouncy-hover group">
<div className="aspect-square bg-secondary-fixed rounded-lg overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Eco-friendly mesh laundry bags in various sizes, presented in a clean and organized arrangement. The lighting is bright and cheerful with soft purple tinted shadows. The composition is dynamic, featuring floating laundry items for a playful, gravity-defying look." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6p8rCCItc34JgAIRwD1WhTjzDbZxD4Sjzcfr9tjlDfP1SuRAy9I6DOIN7D6vaZH5emQxFJM9qZfauVUQolBmR4LEA49_secjoujDn-qttghPGz58zygpeg6wLUMyOlPPzKCmxbKhHipUHR-xyAfMNZtAJBdOBgmRU8lWse2aWGcxVyziztN-w3S3_k4uQfgp48YSedzOfGKmmZEvSxeXS7usW8VOyD47BArQ9h1CD3ICSV1MqralaBXp_oFZlxy9jIYpmvCiVM3VP" />
<button className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<h4 className="font-bold text-on-surface truncate">Mesh Laundry Bags</h4>
<p className="text-primary font-black mt-1">$10.00</p>
</div>

<div className="bg-surface-container-lowest p-4 rounded-lg card-shadow bouncy-hover group">
<div className="aspect-square bg-surface-container-highest rounded-lg overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A chic and minimal glass laundry detergent jar with a natural cork lid. The glass is crystal clear, reflecting soft pink and purple studio lights. The setting is a bright, modern laundry room with white tiles and a pop of green from a small plant in the background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1_6_xSaqOkw2EQnFM6sh2e-lrXmFnyJPX_ub8UHdwEW3xez4UW-PD2RX9F2mW75YYhhG4BFsJqh47gDZTZ3gAnbxVUfoH9d1ocwPk6ndtSWUXp8ebWNkDHVeUDBVCXPnF5tRZ_hydyIhDEitOWQAd_NTxsWobFyYvYwk8vWZrcFxsqItZkOkAeAYWdxCqYsJT4Ra9SPgqWaWD4kkJBoPyPYuTU4vZFbR0h0-opiRi72NCvCgeHmcon3dv61vrmrz5vSfXU-qfv7D1" />
<button className="absolute bottom-3 right-3 bg-white/90 p-2 rounded-full text-primary shadow-sm hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">add_shopping_cart</span>
</button>
</div>
<h4 className="font-bold text-on-surface truncate">Glass Storage Jar</h4>
<p className="text-primary font-black mt-1">$24.00</p>
</div>
</div>
</section>
</main>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden">
        <main className="px-4 py-6 max-w-md mx-auto space-y-6">
<div className="flex items-end justify-between px-2">
<div>
<h2 className="text-3xl font-display font-bold text-on-surface tracking-tight">Your Bag</h2>
<p className="text-on-surface-variant font-medium">3 Items selected</p>
</div>
<div className="bg-primary-fixed text-on-primary-fixed-variant px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Sale Active
            </div>
</div>

<div className="space-y-4">

<div className="group relative bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_16px_rgba(224,64,160,0.08)] flex gap-4 border border-transparent hover:border-primary-fixed-dim transition-all duration-300">
<div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="A premium close-up studio shot of a vibrant pink eco-friendly reusable water bottle with a glossy finish. The lighting is soft and playful with colorful candy-pink shadows. The overall aesthetic is clean, modern, and high-contrast, following a joyful pop design language." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEoyRha7prwfVHG9FX8JjaAoTvNZ-uJ25A4DnrZvAFKxYfHCPTUSLXyOzVlHXA6VR0afRNqPRIHD-UK3M_EJHrYTj3dbYjUyz0y0dNVfiRVEP6MnN_hqLSFEno2jTs0u-89CxfKyfP9ClCUmD6dgaL3y2GnaWvnpAopKiN2VeR0LMCy4_xJsAHOi3hBYz6OhGvg_4Krpzo8g_LYlHCpsN6wifrcFPoA4WHE5T2eNLffiI5s-9Ty4wnZf87sJWdQtk99diWybLKqWvP"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-on-surface text-lg">Neon Hydro Flask</h3>
<p className="text-secondary font-medium text-sm">Bubblegum Pink</p>
</div>
<button className="text-outline hover:text-error transition-colors">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
<div className="flex justify-between items-end">
<span className="text-primary font-black text-xl">$34.00</span>
<div className="flex items-center bg-surface-container-high rounded-full p-1 border border-outline-variant">
<button className="w-8 h-8 flex items-center justify-center text-primary-container bg-surface rounded-full shadow-sm bouncy-hover">
<span className="material-symbols-outlined text-sm">remove</span>
</button>
<span className="px-4 font-bold text-on-surface">1</span>
<button className="w-8 h-8 flex items-center justify-center text-white bg-primary rounded-full shadow-[0_2px_8px_rgba(224,64,160,0.3)] bouncy-hover">
<span className="material-symbols-outlined text-sm">add</span>
</button>
</div>
</div>
</div>
</div>

<div className="group relative bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_16px_rgba(224,64,160,0.08)] flex gap-4 border border-transparent hover:border-primary-fixed-dim transition-all duration-300">
<div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="A professional product photography shot of stylish wireless headphones in a soft lavender purple. The background is a warm light pink white. The image has a playful vibe with vibrant saturated colors and rounded soft lighting, emphasizing the premium and fun Candy design system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO7IHiaDjLrcsANcNeD05-W0HczdbHqK_VsDbrFRg2T3m_TOzQBobI8E46mNvOK7iqWvUFKrV0A7cCx-2oBHWcR6tqd7sKSgVBoL9eBEYPx5-XHJo6W0lgDFHoV669KUTVEQrHHpE1IHOQGQHBOpFKmHDZMvAoUWbS75y1DIY_GDZWPpaT-0ko4oi3863TD0QQ7lM3cTjcogbap29-618NYipimdbZRWXEQj7s4hGcE2SOcjZwqiEoGs8m-76-uOTc1ZXPzmo6CgJ-"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-on-surface text-lg">Dreamy Audio Pro</h3>
<p className="text-secondary font-medium text-sm">Lavender Mist</p>
</div>
<button className="text-outline hover:text-error transition-colors">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
<div className="flex justify-between items-end">
<span className="text-primary font-black text-xl">$129.99</span>
<div className="flex items-center bg-surface-container-high rounded-full p-1 border border-outline-variant">
<button className="w-8 h-8 flex items-center justify-center text-primary-container bg-surface rounded-full shadow-sm bouncy-hover">
<span className="material-symbols-outlined text-sm">remove</span>
</button>
<span className="px-4 font-bold text-on-surface">1</span>
<button className="w-8 h-8 flex items-center justify-center text-white bg-primary rounded-full shadow-[0_2px_8px_rgba(224,64,160,0.3)] bouncy-hover">
<span className="material-symbols-outlined text-sm">add</span>
</button>
</div>
</div>
</div>
</div>

<div className="group relative bg-surface-container-lowest rounded-xl p-4 shadow-[0_4px_16px_rgba(224,64,160,0.08)] flex gap-4 border border-transparent hover:border-primary-fixed-dim transition-all duration-300">
<div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container-high">
<img className="w-full h-full object-cover" data-alt="An artistic shot of a set of colorful biodegradable phone cases in various vibrant shades of sky blue and hot pink. The cases are arranged in a playful bento-grid style pattern. High saturation, bouncy lighting, and soft rounded shadows define the joyful pop aesthetic of the brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgTnzPu-sHRwu0wMvTnrJNoY0F4v73TZY9ZmOtjkk7SmOC_6DfaQXb9bqvre7YVG0_SaKffM5XuMqb51tu3uZ9UKv9PqHSNTgBOIe7bb7uxUkVO6EQ6Vv6F4Dzrip7q67owtRTbaBn_x84cBgoW8jHBFq3WBsnqBviKuYU6DzBIJBVjEgfFek8ylpkGzH7kHoICTiFigxYycaoanFADro4iwnXuMnpwr4Rn68VzSUSwDI6IUtCcGopr7pSsu5mBC6nhgMvEW2J6956"/>
</div>
<div className="flex flex-col justify-between flex-grow">
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-on-surface text-lg">EcoShell Case</h3>
<p className="text-secondary font-medium text-sm">Sky Blue</p>
</div>
<button className="text-outline hover:text-error transition-colors">
<span className="material-symbols-outlined">delete</span>
</button>
</div>
<div className="flex justify-between items-end">
<span className="text-primary font-black text-xl">$25.00</span>
<div className="flex items-center bg-surface-container-high rounded-full p-1 border border-outline-variant">
<button className="w-8 h-8 flex items-center justify-center text-primary-container bg-surface rounded-full shadow-sm bouncy-hover">
<span className="material-symbols-outlined text-sm">remove</span>
</button>
<span className="px-4 font-bold text-on-surface">1</span>
<button className="w-8 h-8 flex items-center justify-center text-white bg-primary rounded-full shadow-[0_2px_8px_rgba(224,64,160,0.3)] bouncy-hover">
<span className="material-symbols-outlined text-sm">add</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-tertiary-fixed rounded-2xl p-4 flex items-center justify-between shadow-[0_4px_12px_rgba(0,150,204,0.1)]">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-tertiary">sell</span>
<span className="text-on-tertiary-fixed font-bold">Have a promo code?</span>
</div>
<button className="text-tertiary font-black text-sm uppercase tracking-widest hover:underline">Apply</button>
</div>
</main>
      </div>

    </div>
  );
}
