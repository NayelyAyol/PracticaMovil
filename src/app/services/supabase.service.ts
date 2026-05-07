import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(
    private router: Router
  ) {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    );

  }

  login(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({
      email,
      password
    });
  }

  register(email: string, password: string) {
    return this.supabase.auth.signUp({
      email,
      password
    });
  }

  async logout() {
    await this.supabase.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
