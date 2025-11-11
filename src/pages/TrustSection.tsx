// import gasSafeLogo from '../assets/Gas Safe Registered.png'
// // import { CheckIcon, StarIcon } from './icons'

// const TESTIMONIALS = [
//   {
//     quote: 'Turned up on time, explained every step and left everything tidy. Boiler now runs like new.',
//     name: 'Homeowner, Staffordshire',
//   },
//   {
//     quote: 'Clear quote, no surprises and the heating has never worked better. Would happily recommend.',
//     name: 'Lettings Manager, Midlands',
//   },
// ]

// export function TrustSection() {
//   return (
//     <section className="section bg-white">
//       <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
//         <div className="space-y-6">
//           <span className="section-eyebrow">Trusted engineers</span>
//           <h2 className="text-3xl font-bold text-brand-dark md:text-4xl">Your heating is in safe hands</h2>
//           <div className="flex items-center gap-4 rounded-2xl border border-brand-secondary/10 bg-brand-light p-6 shadow-soft shadow-black/5">
//             <img src={gasSafeLogo} alt="Gas Safe Register" className="h-12 w-auto rounded bg-white p-1" />
//             <div>
//               <p className="text-sm font-semibold text-brand-dark">Gas Safe Registered</p>
//               <p className="text-xs text-brand-dark/70">Registration No: XXXX0000 (placeholder)</p>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-brand-dark">Why choose us?</h3>
//             <ul className="mt-4 space-y-3 text-sm text-brand-dark/80">
//               {['Qualified and insured engineers', 'Honest pricing and clear advice', 'Reliable and friendly service'].map(
//                 (item) => (
//                   <li key={item} className="flex items-start gap-3">
//                     <CheckIcon className="mt-0.5 h-4 w-4 text-brand-primary" />
//                     <span>{item}</span>
//                   </li>
//                 ),
//               )}
//             </ul>
//           </div>
//         </div>

//         <div className="space-y-4 rounded-3xl border border-brand-secondary/10 bg-brand-light p-8 shadow-soft shadow-black/5">
//           <h3 className="text-lg font-semibold text-brand-dark">Customers rate us highly</h3>
//           <ul className="space-y-4">
//             {TESTIMONIALS.map((testimonial) => (
//               <li key={testimonial.name} className="rounded-2xl bg-white p-6 shadow-soft shadow-black/5">
//                 <div className="mb-2 flex items-center gap-1 text-brand-primary" aria-hidden>
//                   {Array.from({ length: 5 }).map((_, index) => (
//                     <StarIcon key={index} className="h-4 w-4" />
//                   ))}
//                 </div>
//                 <blockquote className="text-sm text-brand-dark/80">“{testimonial.quote}”</blockquote>
//                 <p className="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-secondary/70">
//                   {testimonial.name}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </section>
//   )
// }

