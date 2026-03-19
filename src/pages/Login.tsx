import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function Login() {
  return (
    <div className="max-w-md mx-auto px-6 py-24 mb-10">
      <div className="text-center mb-10">
        <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Concierge</span>
        <h1 className="text-4xl lg:text-5xl font-serif mb-4 text-slate-900 dark:text-white">Welcome <span className="italic">Back</span></h1>
        <div className="w-16 h-px bg-accent-gold mx-auto mb-6"></div>
        <p className="text-slate-500 text-sm">Sign in to access your luxury concierge, track orders, and view exclusive collections.</p>
      </div>

      <div className="bg-slate-50 dark:bg-slate-800/50 p-8 sm:p-10 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm">
        <form className="space-y-6">
          <InputField label="Email Address" type="email" required />
          <div>
            <InputField label="Password" type="password" required />
            <div className="text-right mt-2 relative top-1">
              <Link to="#" className="text-xs text-slate-500 hover:text-accent-gold transition-colors underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2">Forgot your password?</Link>
            </div>
          </div>
          <div className="pt-2">
            <Button type="button" size="lg" fullWidth>Sign In</Button>
          </div>
        </form>

        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 text-center flex flex-col items-center gap-3">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Don't have an account?
          </p>
          <Link to="/signup">
            <Button variant="outline" size="sm">Create Account</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
