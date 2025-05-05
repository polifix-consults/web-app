import React from 'react';

export const ArticleRenderer = ({ article }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold mb-8 text-gray-900">{article.title}</h1>
      {article.sections.map((section, index) => (
        <section key={index} className="mb-10">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">{section.section_title}</h2>
          {section.content && section.content.map((content, idx) => (
            <div key={idx} className="mb-6">
              {typeof content === 'string' ? (
                <p className="text-gray-700 leading-relaxed">{content}</p>
              ) : (
                <div>
                  <h3 className="text-2xl font-medium mb-4 text-gray-800">{content.subtitle}</h3>
                  {Array.isArray(content.text) ? (
                    content.subtitle.includes('Debt Treatment Variability') ? (
                      <div>
                        {content.text.map((item, i) => (
                          <div key={i} className="mb-4">
                            <h4 className="text-lg font-medium text-gray-700">{item.country}</h4>
                            <p className="text-gray-700">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="list-disc pl-6 text-gray-700">
                        {content.text.map((item, i) => (
                          <li key={i}>
                            {typeof item === 'string' ? item : (
                              <>
                                <span className="font-medium">{item.loan_type || item.country}:</span> {item.description}
                              </>
                            )}
                          </li>
                        ))}
                      </ul>
                    )
                  ) : (
                    <p className="text-gray-700 leading-relaxed">{content.text}</p>
                  )}
                </div>
              )}
            </div>
          ))}
          {section.countries && (
            <div className="grid grid-cols-1 gap-6">
              {section.countries.map((country, idx) => (
                <div key={idx} className="mb-6">
                  <h3 className="text-2xl font-medium mb-4 text-gray-800">{country.name}</h3>
                  {country.details.map((detail, i) => (
                    <p key={i} className="text-gray-700 leading-relaxed mb-2">{detail}</p>
                  ))}
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};