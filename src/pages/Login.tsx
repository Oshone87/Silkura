import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function Login() {
  return (
    <div className="relative overflow-hidden">
      <div className="orb orb-pink w-72 h-72 -top-20 -right-20 opacity-10" />
      <div className="orb orb-gold w-56 h-56 bottom-20 -left-10 opacity-10" />

      <div className="max-w-md mx-auto px-6 py-24 mb-10 relative z-10">
        <div className="text-center mb-10 animate-fade-in-up">
          <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Concierge</span>
          <h1 className="text-4xl lg:text-5xl font-serif mb-4 text-slate-900 dark:text-white">Welcome <span className="italic gradient-text bg-gradient-to-r from-primary to-accent-gold">Back</span></h1>
          <div className="w-16 h-0.5 gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm font-light">Sign in to access your luxury concierge, track orders, and view exclusive collections.</p>
        </div>

        <div className="glass-card p-8 sm:p-10 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 shimmer opacity-3" />
          <form className="space-y-6 relative z-10">
            <InputField label="Email Address" type="email" required />
            <div>
              <InputField label="Password" type="password" required />
              <div className="text-right mt-2 relative top-1">
                <Link to="#" className="text-xs text-slate-400 hover:text-primary transition-colors duration-300 underline decoration-slate-300 dark:decoration-slate-600 underline-offset-2">Forgot your password?</Link>
              </div>
            </div>
            <div className="pt-2">
              <Button type="button" size="lg" fullWidth>Sign In</Button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-primary/15 text-center flex flex-col items-center gap-3 relative z-10">
            <p className="text-sm text-slate-500">
              Don't have an account?
            </p>
            <Link to="/signup">
              <Button variant="outline" size="sm">Create Account</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
