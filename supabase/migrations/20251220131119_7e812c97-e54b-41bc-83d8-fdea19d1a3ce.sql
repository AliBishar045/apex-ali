-- Create admissions table for storing admission applications
CREATE TABLE public.admissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  student_name TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  parent_phone TEXT NOT NULL,
  parent_email TEXT NOT NULL,
  school_preference TEXT NOT NULL,
  grade_level TEXT NOT NULL,
  previous_school TEXT,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create news_events table for news and events
CREATE TABLE public.news_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'news', -- 'news' or 'event'
  event_date TIMESTAMP WITH TIME ZONE,
  image_url TEXT,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  parent_name TEXT NOT NULL,
  child_name TEXT,
  school TEXT,
  content TEXT NOT NULL,
  rating INTEGER NOT NULL DEFAULT 5,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.admissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- RLS Policies for admissions (anyone can submit, only authenticated users can view)
CREATE POLICY "Anyone can submit an admission application" 
ON public.admissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can view all admissions" 
ON public.admissions 
FOR SELECT 
TO authenticated
USING (true);

-- RLS Policies for news_events (anyone can read published content)
CREATE POLICY "Anyone can view published news and events" 
ON public.news_events 
FOR SELECT 
USING (is_published = true);

-- RLS Policies for testimonials (anyone can read published testimonials)
CREATE POLICY "Anyone can view published testimonials" 
ON public.testimonials 
FOR SELECT 
USING (is_published = true);

-- Insert sample news and events
INSERT INTO public.news_events (title, excerpt, content, type, event_date, is_featured) VALUES
('2026 Admissions Ongoing', 'Applications are now open for the 2026 academic year across all our campuses.', 'We are pleased to announce that admissions for the 2026 academic year are now open at all Apex Schools campuses. Parents are encouraged to submit their applications early to secure a place for their children. Join our community of excellence where our school mean grade is C+ (7.2) and our top student achieved B+.', 'news', NULL, true),
('Annual Inter-Schools Sports Day', 'Join us for the annual sports competition featuring athletics, football, and basketball.', 'All parents and guardians are cordially invited to attend our Annual Inter-Schools Sports Day. The event will feature various sporting activities including athletics, football, basketball, and volleyball. Come and cheer for our talented students!', 'event', '2025-02-15 09:00:00+03', true),
('New Computer Laboratory Opened', 'State-of-the-art computer lab now available for all students across our campuses.', 'We are excited to announce the opening of our new computer laboratory equipped with the latest technology. This facility will enhance our students'' digital literacy and prepare them for the modern world. The lab features 40 computers with high-speed internet connectivity.', 'news', NULL, false),
('Parents'' Day Celebration', 'Annual parents'' day with student performances and academic progress reports.', 'We invite all parents to join us for our annual Parents'' Day celebration. The day will feature student performances, academic progress presentations, and an opportunity to meet with teachers. Refreshments will be provided.', 'event', '2025-03-01 08:30:00+03', false);

-- Insert sample testimonials
INSERT INTO public.testimonials (parent_name, child_name, school, content, rating, is_featured) VALUES
('Mrs. Fatima Hassan', 'Ahmed Hassan', 'Apex Boys High School', 'The transformation I have seen in my son since joining Apex is remarkable. The school has nurtured his academic abilities while instilling strong Islamic values. The teachers are dedicated and truly care about each student''s success.', 5, true),
('Mr. Ibrahim Abdi', 'Amina Ibrahim', 'Apex Girls High School', 'Choosing Apex Girls School for my daughter was the best decision. The safe learning environment and focus on both education and character development has helped her become a confident young woman. The school''s emphasis on Islamic education is exactly what we wanted.', 5, true),
('Mrs. Zainab Omar', 'Yusuf Omar', 'Apex Junior School', 'My son loves going to school every day! The CBC curriculum is taught in an engaging way, and the teachers make learning fun. The feeding program is excellent, and I appreciate the school''s attention to holistic development.', 5, true),
('Mr. Hassan Abdullahi', 'Khadija Hassan', 'Apex Girls High School', 'The discipline and academic excellence at Apex Schools is unmatched. My daughter has excelled in both her studies and extracurricular activities. I highly recommend this school to any parent looking for quality education with strong values.', 5, false),
('Mrs. Halima Ahmed ', 'Mohamed Juma', 'Apex Boys High School', 'As a parent, I am impressed by the dedication of the teaching staff and the school management. The boarding facilities are well-maintained, and the students are well taken care of. My son has thrived academically and spiritually.', 5, false);