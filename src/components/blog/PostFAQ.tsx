import React from 'react';
import { extractFAQs } from '@/utils/faqExtractor';

interface PostFAQProps {
  content: string;
}

const PostFAQ: React.FC<PostFAQProps> = ({ content }) => {
  const faqs = extractFAQs(content);
  if (!faqs.length) return null;

  return (
    <section className="mt-10 mb-6">
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions fréquentes</h2>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group border border-gray-200 rounded-lg p-4 hover:border-gray-300">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-3">
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <div className="mt-3 text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostFAQ;
