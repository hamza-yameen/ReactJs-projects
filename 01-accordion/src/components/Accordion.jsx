import React, { useState } from 'react'
import questions from './Questions.js'

const Accordion = () => {
  const [clickedAccordion, setClickedAccordion] = useState(1)

  const accordionClickHandler = (id) => {
    clickedAccordion === id
      ? setClickedAccordion(null)
      : setClickedAccordion(id)
  }

  return (
    <div className="w-1/2 rounded-md bg-gray-100 p-4 shadow-md">
      <h1 className="text-h1 pb-1 text-center text-3xl font-bold">Questions</h1>
      <div className="w-100 h-100">
        {questions.length > 0 &&
          questions.map((question) => {
            return (
              <div key={question.id} className="border-b p-4">
                <button
                  onClick={() => accordionClickHandler(question.id)}
                  className="flex w-full flex-row items-center justify-between"
                >
                  <span className="mt-1 font-bold">{question.title}</span>
                  <span
                    id="icon-2"
                    className="text-slate-800 transition-transform duration-300"
                  >
                    {clickedAccordion === question.id ? (
                      <svg
                        className="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                      </svg>
                    ) : (
                      <svg
                        className="size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                      </svg>
                    )}
                  </span>
                </button>
                {clickedAccordion === question.id && (
                  <div
                    className={`overflow-hidden transition-all duration-1000 ease-in-out ${
                      clickedAccordion === question.id
                        ? 'max-h-40 opacity-100'
                        : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="py-3 text-lg">{question.info}</div>
                  </div>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Accordion
