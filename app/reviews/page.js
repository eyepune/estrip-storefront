'use client';

export default function ReviewsPage() {
  // Dummy review data for the masonry grid
  const reviews = [
    { name: 'Sarah M.', text: 'Absolutely love these sheets. They take up zero space in my laundry room and my clothes have never smelled better. Even got out a stubborn grass stain on my son\'s jeans.', rating: 5, date: '2 days ago', type: 'text' },
    { name: 'David L.', text: 'I was skeptical about moving away from liquid, but E-strip proved me wrong. It dissolves perfectly in cold water and the subscription makes it so I never run out.', rating: 5, date: '1 week ago', type: 'text' },
    { name: 'Jessica R.', text: 'The Stain Remover Spray is pure magic. Used it on a red wine spill on a white shirt and it disappeared before my eyes.', rating: 5, date: '2 weeks ago', type: 'text' },
    { name: 'Mark T.', text: 'Great product. I love the plastic-free packaging. Just wish they had a lavender scent option.', rating: 4, date: '3 weeks ago', type: 'text' },
    { name: 'Priya K.', text: 'The fact that there is no plastic jug to throw away makes me so happy. The clean is incredible and it\'s gentle on my sensitive skin. Highly recommend the Ultimate Bundle!', rating: 5, date: '1 month ago', type: 'text' },
    { name: 'Amanda B.', text: 'Changed my whole laundry routine. So much cleaner and less messy.', rating: 5, date: '1 month ago', type: 'text' },
    { name: 'Tom H.', text: 'Works well. Sheets are a bit thin so I use two for big loads.', rating: 4, date: '2 months ago', type: 'text' },
    { name: 'Elena V.', text: 'Obsessed with the Dishwashing Sheets! They cut through grease just as well as the pods I used to buy, but with zero plastic.', rating: 5, date: '2 months ago', type: 'text' },
  ];

  return (
    <div className="bg-[#f6f6f6] min-h-screen pb-24">
      
      {/* Header */}
      <section className="bg-gray-900 text-white py-20 text-center px-4 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Real people. Real results.</h1>
          
          <div className="flex flex-col items-center justify-center gap-2 mb-6">
            <span className="text-6xl font-black text-[#FFC107]">4.9</span>
            <div className="flex text-[#FFC107] text-2xl">★★★★★</div>
            <p className="text-gray-400 font-bold uppercase tracking-widest text-sm mt-2">Based on 10,248 Reviews</p>
          </div>
          
          <div className="flex items-center justify-center gap-6 mt-8 opacity-60 grayscale">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[20px]">verified_user</span> Google Certified</div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[20px]">thumb_up</span> Trustpilot 4.8/5</div>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        {/* We use CSS columns for a simple masonry layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, i) => (
            <div key={i} className="break-inside-avoid bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-shadow">
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex text-[#FFC107] text-sm">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className={`material-symbols-outlined ${s <= review.rating ? 'text-[#FFC107]' : 'text-gray-200'}`} style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-400">{review.date}</span>
              </div>
              
              <p className="text-gray-700 font-medium leading-relaxed mb-6">"{review.text}"</p>
              
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-black text-gray-900 border border-gray-200">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-gray-900 text-sm">{review.name}</p>
                  <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-0.5 uppercase tracking-widest"><span className="material-symbols-outlined text-[12px]">verified</span> Verified Buyer</p>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="btn bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-10 py-4 rounded-[9999px] font-black text-sm tracking-widest uppercase shadow-sm transition-colors">
            Load More Reviews
          </button>
        </div>
      </section>

    </div>
  );
}
