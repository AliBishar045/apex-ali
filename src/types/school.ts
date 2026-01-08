export type SchoolType = 'boys' | 'girls' | 'junior';

export interface SchoolStaff {
  id: string;
  school_type: SchoolType;
  name: string;
  role: 'principal' | 'deputy' | 'dos' | 'hod' | 'teacher' | 'head_teacher';
  title: string;
  image_url: string | null;
  department?: string | null;
  subject?: string | null;
  is_leadership: boolean;
}

export interface SchoolFacility {
  id: string;
  school_type: SchoolType;
  name: string;
  image_url: string | null;
  description: string | null;
  category?: 'academic' | 'sports' | 'boarding' | 'other';
}
