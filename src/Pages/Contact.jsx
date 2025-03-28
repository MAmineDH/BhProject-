const Contact = () => {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-black mb-8">Contact Us</h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              Have questions or need assistance? Reach out to us using the form below or contact us
              directly.
            </p>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;