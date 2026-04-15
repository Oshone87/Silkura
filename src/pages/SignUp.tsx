import { Link } from 'react-router-dom';
import InputField from '../components/InputField';
import Button from '../components/Button';

export default function SignUp() {
  return (
    <div className="relative overflow-hidden">
      <div className="orb orb-pink w-72 h-72 -top-20 -left-20 opacity-10" />
      <div className="orb orb-gold w-56 h-56 bottom-20 -right-10 opacity-10" />

      <div className="max-w-md mx-auto px-6 py-20 mb-10 relative z-10">
        <div className="text-center mb-10 animate-fade-in-up">
          <span className="text-accent-gold font-medium tracking-[0.3em] uppercase text-sm mb-4 block">Join Silkura</span>
          <h1 className="text-4xl lg:text-5xl font-serif mb-4 text-slate-900 dark:text-white">Create <span className="italic gradient-text bg-gradient-to-r from-primary to-accent-gold">Account</span></h1>
          <div className="w-16 h-0.5 gradient-primary mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-sm font-light">Experience the epitome of luxury. Create an account to unlock tailored recommendations.</p>
        </div>

        <div className="glass-card p-8 sm:p-10 relative overflow-hidden animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="absolute inset-0 shimmer opacity-3" />
          <form className="space-y-6 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <InputField label="First Name" required />
              <InputField label="Last Name" required />
            </div>
            <InputField label="Email Address" type="email" required />
            <InputField label="Password" type="password" required />
            
            <div className="flex items-start gap-3 mt-4">
              <input type="checkbox" id="newsletter" className="mt-1 w-4 h-4 border-primary/30 rounded text-primary focus:ring-primary/50" defaultChecked />
              <label htmlFor="newsletter" className="text-xs text-slate-400 leading-relaxed cursor-pointer">
                Subscribe to the Silkura newsletter for exclusive previews, elegant insights, and first access to new collections.
              </label>
            </div>

            <div className="pt-4">
              <Button type="button" size="lg" fullWidth>Create Account</Button>
            </div>
          </form>

          <div className="mt-8 pt-8 border-t border-primary/15 text-center relative z-10">
            <p className="text-sm text-slate-500">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:text-primary-dark font-bold transition-all duration-300 underline decoration-primary/30 underline-offset-4">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
