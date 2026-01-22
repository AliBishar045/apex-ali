import PrincipalMessage from "./profile/PrincipalMessage";
import principalImage from "@/assets/1.png"; // Using 1.png as placeholder for Principal

const HeadTeacherMessage = () => {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4">
        <PrincipalMessage
          name="The Principal"
          title="School Principal"
          image={principalImage}
          message={[
            "Welcome to Apex Boys High School, a center of excellence where we nurture young minds to become future leaders.",
            "Our commitment to academic excellence, moral values, and holistic development sets us apart. We believe in empowering every student to achieve their full potential.",
            "We provide a supportive environment that encourages curiosity, creativity, and critical thinking. Our dedicated staff works tirelessly to ensure that each student receives the guidance and support they need to thrive.",
            "Join us in this journey of knowledge and character building as we shape the leaders of tomorrow."
          ]}
        />
      </div>
    </section>
  );
};

export default HeadTeacherMessage;
