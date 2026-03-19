import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function SignUp() {
  return (
    <div className="max-w-md mx-auto px-6 py-20 mb-10">
      <div className="text-center mb-10">
        <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Join Silkura</span>
        <h1 className="text-4xl lg:text-5xl font-serif mb-4 text-slate-900 dark:text-white">Create <span className="italic">Account</span></h1>
        <div className="w-16 h-px bg-accent-gold mx-auto mb-6"></div>
        <p className="text-slate-500 text-sm">Experience the epitome of luxury. Create an account to unlock tailored recommendations.</p>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 p-8 sm:p-10 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <InputField label="First Name" required />
            <InputField label="Last Name" required />
          </div>
          <InputField label="Email Address" type="email" required />
          <InputField label="Password" type="password" required />
          
          <div className="flex items-start gap-3 mt-4">
            <input type="checkbox" id="newsletter" className="mt-1 w-4 h-4 border-slate-300 rounded text-accent-gold focus:ring-accent-gold" defaultChecked />
            <label htmlFor="newsletter" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
              Subscribe to the Silkura newsletter for exclusive previews, elegant insights, and first access to new collections.
            </label>
          </div>

          <div className="pt-4">
            <Button type="button" size="lg" fullWidth>Create Account</Button>
          </div>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{' '}
            <Link to="/login" className="text-accent-gold hover:italic font-bold transition-all underline decoration-accent-gold/30 underline-offset-4">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
