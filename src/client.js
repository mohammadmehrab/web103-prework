import { createClient } from '@supabase/supabase-js';

const URL = 'https://vxzyqogaozymnuvuioev.supabase.co';

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4enlxb2dhb3p5bW51dnVpb2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM5MTU4NzcsImV4cCI6MjAzOTQ5MTg3N30.oAhCLbSNU7xnEbuBRTaAcK45wmN94fA5_jmX0yCqNzA';

export const supabase = createClient(URL, API_KEY);

