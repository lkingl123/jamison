import { FaFileAlt, FaQuestionCircle, FaCheckCircle } from "react-icons/fa";

const FeatureSteps = () => {
  return (
    <section id="how-it-works" className="bg-black py-12">
      <div className="container mx-auto px-6 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
          {/* Step 1 */}
          <div className="text-center flex flex-col justify-between h-full">
            <div className="flex justify-center items-center text-4xl mb-4">
              <FaFileAlt />
            </div>
            <h3 className="text-xl font-semibold mb-4">Upload a Face Sheet</h3>
            <p className="text-m text-gray-400">
              Start by uploading a patient’s hospital intake PDF. Clairo will scan and extract key fields like name, DOB, insurance, and diagnosis.
            </p>
            <div className="text-5xl mt-4 flex justify-center items-center font-bold text-gray-500">
              1
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-center flex flex-col justify-between h-full">
            <div className="flex justify-center items-center text-4xl mb-4">
              <FaQuestionCircle />
            </div>
            <h3 className="text-xl font-semibold mb-4">Answer Smart Questions</h3>
            <p className="text-m text-gray-400">
              Clairo highlights missing or questionable info and asks for clarification — like missing insurance IDs, dates, or unclear notes.
            </p>
            <div className="text-5xl mt-4 flex justify-center items-center font-bold text-gray-500">
              2
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-center flex flex-col justify-between h-full">
            <div className="flex justify-center items-center text-4xl mb-4">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-semibold mb-4">Confirm & Submit Summary</h3>
            <p className="text-m text-gray-400">
              Once reviewed, the final summary is approved and saved — ready for billing, insurance, or compliance workflows.
            </p>
            <div className="text-5xl mt-4 flex justify-center items-center font-bold text-gray-500">
              3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSteps;
