import './App.css';
import { Accordion } from './components';
import { Provider as JotaiProvider } from "jotai";

const datas = [
  {
    "question": "What is Alpine.js?",
    "answer": "It allows you to write most of your JS inline in your HTML, making it easier to write declarative code (as opposed to procedural code). According to its creator Caleb Porzio, it aims to fill the void between vanilla JS (or jQuery) and large v-dom frameworks like Vue/React."
  },
  {
    "question": "What's an accordion?",
    "answer": "An accordion always contains the category title, an expanded and a collapsed state, an icon indicating expansion, and the spacing between them."
  },
  {
    "question": "When and how should it be used?",
    "answer": "It should be used when users only need a few key concepts or descriptions of the content on a single page."
  },
  {
    "question": "What happens if the user clicks on a collapsed card while another card is open?",
    "answer": "It happens that the open card was closed, to give way to the information of the next open card, but there are different designs that prefer it the other way around."
  },
  {
    "question": "How to choose an icon to indicate expansion?",
    "answer": "You must choose a different icon to open and close, so that the user understands what action he took."
  }
]

function App() {
  return (
    <JotaiProvider>
        <main>
          <section className='container accordion'>
            {datas.map((data: any, idx: number) => (
              <Accordion key={idx}>
                <Accordion.Header>{data.question}</Accordion.Header>
                <Accordion.Content>{data.answer}</Accordion.Content>
              </Accordion>
            ))}
          </section>
        </main>
      </JotaiProvider>
  );
}

export default App;
