import { Toaster, toast } from 'sonner';
import { actions } from 'astro:actions';

export default function Contact() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      // --------------------------------------------------------------------------------
      // 📌  form submit event handler
      // --------------------------------------------------------------------------------
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const data = Object.fromEntries(formData.entries());
      console.log(data);

      if (!data['first-name'] || !data['last-name'] || !data['email'] || !data['message']) {
        toast.error('Please fill all required fields');
        return;
      }
      const { error } = await actions.submitEmail({ params: data });

      if (error) {
        toast.error('Error sending email');
        return;
      }

      toast.success(`✨ Thanks for reaching out ${data['first-name'] ?? ''}! We'll get back to you soon.`);
    } catch (error) {
      console.error(error);

      toast.error('Something went wrong!');
    }
  };

  return (
    <div className="relative">
      <Toaster closeButton richColors position="top-left" />

      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-300">Let's work together</h2>
            <p className="mt-2 text-lg leading-8 text-gray-200">
              For quicker answers, explore our FAQs section. You may find the solution you're looking for right there!
              If not, our support team is delighted to help you.
            </p>
            <form onSubmit={handleSubmit} method="POST" className="mt-16">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-200">
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-200">
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-200">
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label htmlFor="phone" className="block font-semibold text-gray-200">
                      Company
                    </label>
                    <p id="phone-description" className="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label htmlFor="phone" className="block font-semibold text-gray-200">
                      Phone
                    </label>
                    <p id="phone-description" className="text-gray-400">
                      Optional
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-200">
                      How can we help you?
                    </label>
                    <p id="message-description" className="text-gray-400">
                      Max 500 characters
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-semibold leading-6 text-gray-200">Expected budget</legend>
                  <div className="mt-4 space-y-4 text-sm leading-6 text-gray-200">
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="under_1k"
                        id="budget-under-1k"
                        name="budget"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                      />
                      <label htmlFor="budget-under-1k">Less than $1K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="1k-5k"
                        id="budget-1k-5k"
                        name="budget"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                      />
                      <label htmlFor="budget-1k-5k">$1K – $5K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="5k-10k"
                        id="budget-5k-10k"
                        name="budget"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                      />
                      <label htmlFor="budget-5k-10k">$5K – $10K</label>
                    </div>
                    <div className="flex gap-x-2.5">
                      <input
                        defaultValue="over_10k"
                        id="budget-over-10k"
                        name="budget"
                        type="radio"
                        className="mt-1 h-4 w-4 border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-600"
                      />
                      <label htmlFor="budget-over-10k">$10K+</label>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-400 pt-8">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
