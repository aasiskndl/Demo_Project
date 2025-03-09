const LocationMap = () => {
  return (
    <div className="w-full m-0 p-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.881234377315!2d85.33889407452689!3d27.690065376192432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f6243d1abd%3A0xbc255c585b25a407!2sMatrika%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1741501702851!5m2!1sen!2snp"
        className="w-full h-[400px] md:h-[500px] lg:h-[600px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Matrika Technology Location"
      ></iframe>
    </div>
  );
};

export default LocationMap;
