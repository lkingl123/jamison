import { FaFileAlt, FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

const FeatureSteps = () => {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-6 text-white">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
          {/* Step 1 */}
          <div className="text-center flex flex-col justify-between h-full">
            <div className="flex justify-center items-center text-4xl mb-4">
              <FaFileAlt />
            </div>
            <h3 className="text-xl font-semibold mb-4">Upload your data</h3>
            <p className="text-m text-gray-500">
              Feed your chatbot with your custom data from files like PDF, DOC, etc., or scan any website content automatically.
            </p>
            <div className="text-5xl mt-2 flex justify-center items-center">
              <span>1</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center flex flex-col justify-between h-full">
            <div className="flex justify-center items-center text-4xl mb-4">
              <FaQuestionCircle />
            </div>
            <h3 className="text-xl font-semibold mb-4">Ask any question</h3>
            <p className="text-m text-gray-500">
              Interact with the chatbot by asking anything you want like general questions, summaries, analyses, and reports.
            </p>
            <div className="text-5xl mt-2 flex justify-center items-center">
              <span>2</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center flex flex-col justify-between h-full">
            <div className="flex justify-center items-center text-4xl mb-4">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold mb-4">Get useful answers</h3>
            <p className="text-m text-gray-500">
              Get your answers in seconds. Then export the chat as a file for convenient offline consultation.
            </p>
            <div className="text-5xl mt-2 flex justify-center items-center">
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSteps;
