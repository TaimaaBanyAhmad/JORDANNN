import React, { useState } from 'react';

const SuggestionBox: React.FC = () => {
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);
  const [submittedSuggestion, setSubmittedSuggestion] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) {
      setError('Please enter a suggestion.');
      return;
    }

    setLoading(true);
    setError(null);
    setResponse(null);
    setSubmittedSuggestion(suggestion);

    // Simulate an API call
    setTimeout(() => {
      try {
        const cannedResponse = "Thank you for your valuable suggestion! Ideas like yours are crucial for fostering innovation in Jordan's agricultural sector. This has been noted for further consideration.";
        setResponse(cannedResponse);
      } catch (err) {
        console.error(err);
        setError('Sorry, there was an error submitting your suggestion. Please try again later.');
      } finally {
        setLoading(false);
        setSuggestion('');
      }
    }, 1500); // Simulate network delay
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-light-card dark:bg-dark-card p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="suggestion" className="block text-sm font-medium mb-2">Your Suggestion</label>
            <textarea
              id="suggestion"
              name="suggestion"
              rows={4}
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              className="w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-jordan-green focus:border-jordan-green"
              placeholder="e.g., Use more hydroponics in cities..."
              disabled={loading}
              aria-label="Suggestion Input"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-jordan-green hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-jordan-green disabled:bg-gray-400"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Suggestion'}
            </button>
          </div>
        </form>
      </div>

      {error && (
        <div role="alert" className="mt-6 p-4 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-200 rounded-md">
          <p>{error}</p>
        </div>
      )}
      
      {submittedSuggestion && !loading && response && (
        <div className="mt-6 space-y-4" aria-live="polite">
          <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md border-l-4 border-jordan-brown">
            <h3 className="font-semibold text-lg">Your suggestion:</h3>
            <p className="italic">"{submittedSuggestion}"</p>
          </div>
          <div className="bg-light-card dark:bg-dark-card p-6 rounded-lg shadow-md border-l-4 border-jordan-green">
            <h3 className="font-semibold text-lg">Feedback:</h3>
            <p>{response}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestionBox;
