import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1B0D00] text-white text-center py-10 mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl mb-4" style={{ fontFamily: '"Road Rage", sans-serif' }}>openCSE</h2>
        <p className="text-lg opacity-70 mb-6">Empowering CSE students with open-source documentation.</p>
        
        <div className="flex justify-center gap-6 mb-8">
          <a href="https://github.com/pushkarsinghh" className="hover:text-accent transition-colors"><Github size={24} /></a>
          <a href="#" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
          <a href="#" className="hover:text-accent transition-colors"><Twitter size={24} /></a>
          <a href="mailto:hello@opencse.org" className="hover:text-accent transition-colors"><Mail size={24} /></a>
        </div>
        
        <div className="border-t border-white/5 pt-8">
          <p className="text-sm opacity-50">Made with ♡ by Pushkar & Contributors</p>
          <p className="text-xs opacity-30 mt-2">© 2026 openCSE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
