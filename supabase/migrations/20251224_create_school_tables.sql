-- Create enum for school types
CREATE TYPE school_type AS ENUM ('boys', 'girls', 'junior');

-- Create staff table
CREATE TABLE public.school_staff (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    school_type school_type NOT NULL,
    name TEXT NOT NULL,
    role TEXT NOT NULL, -- 'principal', 'deputy', 'dos', 'hod', 'teacher', 'head_teacher'
    title TEXT NOT NULL, -- Display title e.g. 'Principal', 'Head of Mathematics'
    image_url TEXT,
    department TEXT, -- Null for Junior school or non-HOD
    subject TEXT, -- For teachers
    is_leadership BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create facilities table
CREATE TABLE public.school_facilities (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    school_type school_type NOT NULL,
    name TEXT NOT NULL,
    image_url TEXT,
    description TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.school_staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_facilities ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON public.school_staff
    FOR SELECT USING (true);

CREATE POLICY "Enable read access for all users" ON public.school_facilities
    FOR SELECT USING (true);

-- Insert sample data for Boys School
INSERT INTO public.school_staff (school_type, name, role, title, is_leadership) VALUES
('boys', 'Mr. Kamau', 'principal', 'Principal', true),
('boys', 'Mr. Omondi', 'deputy', 'Deputy Principal', true),
('boys', 'Mr. Kimani', 'dos', 'Director of Studies', true);

INSERT INTO public.school_staff (school_type, name, role, title, department) VALUES
('boys', 'Mr. Juma', 'hod', 'Head of Mathematics', 'Mathematics'),
('boys', 'Mrs. Wanjiku', 'hod', 'Head of Sciences', 'Sciences');

INSERT INTO public.school_staff (school_type, name, role, title, subject) VALUES
('boys', 'Mr. Ali', 'teacher', 'Teacher', 'Physics/Maths'),
('boys', 'Mr. Otieno', 'teacher', 'Teacher', 'History/CRE');

-- Insert sample data for Girls School
INSERT INTO public.school_staff (school_type, name, role, title, is_leadership) VALUES
('girls', 'Mrs. Amina', 'principal', 'Principal', true),
('girls', 'Mrs. Fatima', 'deputy', 'Deputy Principal', true),
('girls', 'Ms. Sarah', 'dos', 'Director of Studies', true);

-- Insert sample data for Junior School
INSERT INTO public.school_staff (school_type, name, role, title, is_leadership) VALUES
('junior', 'Mrs. Mary', 'head_teacher', 'Head Teacher', true),
('junior', 'Mr. John', 'deputy', 'Deputy Head Teacher', true);

INSERT INTO public.school_staff (school_type, name, role, title, subject) VALUES
('junior', 'Tr. Alice', 'teacher', 'Class Teacher', 'Grade 1'),
('junior', 'Tr. Bob', 'teacher', 'Class Teacher', 'Grade 2');
