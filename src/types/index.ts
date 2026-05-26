// src/types/index.ts
import React from "react";

/**
 * Type Definitions
 *
 * File ini berisi semua TypeScript interfaces dan types yang digunakan
 * di berbagai tempat dalam aplikasi.
 */

// ==========================================
// UI Component Types
// ==========================================

export type ButtonVariant = 'primary' | 'secondary' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

// ==========================================
// Section Data Types
// ==========================================

/**
 * ServiceItem untuk services section
 */
export interface ServiceItem {
  id: string; // Menggunakan string agar lebih fleksibel untuk mock data id (e.g., 's1')
  title: string;
  description: string;
  icon: 'code' | 'globe' | 'smartphone'; // Kita kunci tipe ikonnya sesuai komponen Figma
}

/**
 * Team Member untuk team section (Diadaptasi dari card Willy Nielsen di Figma)
 */
export interface TeamMember {
  id: string;
  name: string;
  role: string; // Kita gunakan role agar sinkron dengan sebutan PM / UI Designer
  imageUrl: string;
}

/**
 * Testimonial untuk testimonials section (Diadaptasi dari card Sindy Tan di Figma)
 */
export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string; // Teks ulasan utama
  avatarUrl: string;
  rating: number; // Untuk looping jumlah bintang emas (1-5)
}

// ==========================================
// Navigation & Form Types
// ==========================================

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}