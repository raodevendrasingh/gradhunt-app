export interface SelectOption {
	label: string;
	value: string;
}

export const languageProficiency: readonly SelectOption[] = [
	{ label: "Beginner", value: "Beginner" },
	{ label: "Intermediate", value: "Intermediate" },
	{ label: "Expert", value: "Expert" },
	{ label: "Native", value: "Native" },
];

export const companySize: SelectOption[] = [
	{ label: "1 - 9 Employees", value: "1 - 9" },
	{ label: "10 - 49 Employees", value: "10 - 49" },
	{ label: "50 - 99 Employees", value: "50 - 99" },
	{ label: "100 - 249 Employees", value: "100 - 249" },
	{ label: "More than 250 Employees", value: "More than 250" },
];

export const jobTitleOptions: readonly SelectOption[] = [
	{ label: "Software Developer", value: "Software Developer" },
	{ label: "Full Stack Developer", value: "Full Stack Developer" },
	{ label: "Data Scientist", value: "Data Scientist" },
	{ label: "Network Engineer", value: "Network Engineer" },
	{ label: "IT Support Specialist", value: "IT Support Specialist" },
	{ label: "Network Administrator", value: "Network Administrator" },
	{ label: "Systems Engineer", value: "Systems Engineer" },
	{ label: "Backend Developer", value: "Backend Developer" },
	{ label: "Frontend Developer", value: "Frontend Developer" },
	{ label: "Software Engineer", value: "Software Engineer" },
	{ label: "Sales Representative", value: "Sales Representative" },
	{
		label: "Customer Service Representative",
		value: "Customer Service Representative",
	},
	{ label: "Marketing Manager", value: "Marketing Manager" },
	{ label: "Accountant", value: "Accountant" },
	{ label: "IT Project Manager", value: "IT Project Manager" },
	{ label: "Graphic Designer", value: "Graphic Designer" },
	{ label: "Web Developer", value: "Web Developer" },
	{ label: "Human Resources Manager", value: "Human Resources Manager" },
	{ label: "Operations Manager", value: "Operations Manager" },
	{ label: "Database Administrator", value: "Database Administrator" },
	{ label: "Cybersecurity Specialist", value: "Cybersecurity Specialist" },
	{ label: "Product Manager", value: "Product Manager" },
	{ label: "UX Designer", value: "UX Designer" },
	{ label: "DevOps Engineer", value: "DevOps Engineer" },
	{
		label: "Business Development Manager",
		value: "Business Development Manager",
	},
	{ label: "Mechanical Engineer", value: "Mechanical Engineer" },
	{ label: "Electrical Engineer", value: "Electrical Engineer" },
	{ label: "Aeronutical Engineer", value: "Aeronutical Engineer" },
	{ label: "Civil Engineer", value: "Civil Engineer" },
	{ label: "Nurse", value: "Nurse" },
	{ label: "Consultant", value: "Consultant" },
	{ label: "Manager", value: "Manager" },
	{ label: "Administrative Assistant", value: "Administrative Assistant" },
	{ label: "Logistics Coordinator", value: "Logistics Coordinator" },
	{ label: "Recruiter", value: "Recruiter" },
	{
		label: "Digital Marketing Specialist",
		value: "Digital Marketing Specialist",
	},
	{ label: "Financial Analyst", value: "Financial Analyst" },
	{ label: "Teacher", value: "Teacher" },
	{ label: "Pharmacist", value: "Pharmacist" },
	{ label: "Doctor", value: "Doctor" },
	{ label: "Lawyer", value: "Lawyer" },
	{ label: "Dentist", value: "Dentist" },
	{ label: "Veterinarian", value: "Veterinarian" },
	{ label: "Architect", value: "Architect" },
	{ label: "Interior Designer", value: "Interior Designer" },
	{ label: "Event Planner", value: "Event Planner" },
	{ label: "Travel Agent", value: "Travel Agent" },
	{ label: "Hotel Manager", value: "Hotel Manager" },
	{ label: "Restaurant Manager", value: "Restaurant Manager" },
	{ label: "Retail Manager", value: "Retail Manager" },
	{ label: "Supply Chain Manager", value: "Supply Chain Manager" },
	{ label: "Business Analyst", value: "Business Analyst" },
	{ label: "Data Analyst", value: "Data Analyst" },
	{ label: "Marketing Analyst", value: "Marketing Analyst" },
	{ label: "Sales Manager", value: "Sales Manager" },
	{ label: "Customer Support Manager", value: "Customer Support Manager" },
	{ label: "Security Guard", value: "Security Guard" },
	{ label: "Firefighter", value: "Firefighter" },
	{ label: "Police Officer", value: "Police Officer" },
];

export const startYearOptions: readonly SelectOption[] = [
	{ label: "2024", value: "2024" },
	{ label: "2023", value: "2023" },
	{ label: "2022", value: "2022" },
	{ label: "2021", value: "2021" },
	{ label: "2020", value: "2020" },
	{ label: "2019", value: "2019" },
	{ label: "2018", value: "2018" },
	{ label: "2017", value: "2017" },
	{ label: "2016", value: "2016" },
	{ label: "2015", value: "2015" },
	{ label: "2014", value: "2014" },
	{ label: "2013", value: "2013" },
	{ label: "2012", value: "2012" },
	{ label: "2011", value: "2011" },
	{ label: "2010", value: "2010" },
	{ label: "2009", value: "2009" },
	{ label: "2008", value: "2008" },
	{ label: "2007", value: "2007" },
	{ label: "2006", value: "2006" },
	{ label: "2005", value: "2005" },
	{ label: "2004", value: "2004" },
	{ label: "2003", value: "2003" },
	{ label: "2002", value: "2002" },
	{ label: "2001", value: "2001" },
	{ label: "2000", value: "2000" },
	{ label: "1999", value: "1999" },
	{ label: "1998", value: "1998" },
	{ label: "1997", value: "1997" },
	{ label: "1996", value: "1996" },
	{ label: "1995", value: "1995" },
];

export const monthOptions: readonly SelectOption[] = [
	{ label: "January", value: "January" },
	{ label: "February", value: "February" },
	{ label: "March", value: "March" },
	{ label: "April", value: "April" },
	{ label: "May", value: "May" },
	{ label: "June", value: "June" },
	{ label: "July", value: "July" },
	{ label: "August", value: "August" },
	{ label: "September", value: "September" },
	{ label: "October", value: "October" },
	{ label: "November", value: "November" },
	{ label: "December", value: "December" },
];

export const endYearOptions: readonly SelectOption[] = [
	{ label: "2030", value: "2030" },
	{ label: "2029", value: "2029" },
	{ label: "2028", value: "2028" },
	{ label: "2027", value: "2027" },
	{ label: "2026", value: "2026" },
	{ label: "2025", value: "2025" },
	{ label: "2024", value: "2024" },
	{ label: "2023", value: "2023" },
	{ label: "2022", value: "2022" },
	{ label: "2021", value: "2021" },
	{ label: "2020", value: "2020" },
	{ label: "2019", value: "2019" },
	{ label: "2018", value: "2018" },
	{ label: "2017", value: "2017" },
	{ label: "2016", value: "2016" },
	{ label: "2015", value: "2015" },
	{ label: "2014", value: "2014" },
	{ label: "2013", value: "2013" },
	{ label: "2012", value: "2012" },
	{ label: "2011", value: "2011" },
	{ label: "2010", value: "2010" },
	{ label: "2009", value: "2009" },
	{ label: "2008", value: "2008" },
	{ label: "2007", value: "2007" },
	{ label: "2006", value: "2006" },
	{ label: "2005", value: "2005" },
	{ label: "2004", value: "2004" },
	{ label: "2003", value: "2003" },
	{ label: "2002", value: "2002" },
	{ label: "2001", value: "2001" },
	{ label: "2000", value: "2000" },
	{ label: "1999", value: "1999" },
	{ label: "1998", value: "1998" },
	{ label: "1997", value: "1997" },
	{ label: "1996", value: "1996" },
	{ label: "1995", value: "1995" },
	{ label: "1994", value: "1994" },
	{ label: "1993", value: "1993" },
	{ label: "1992", value: "1992" },
	{ label: "1991", value: "1991" },
	{ label: "1990", value: "1990" },
];

export const employmentType: readonly SelectOption[] = [
	{ label: "Full Time", value: "Full Time" },
	{ label: "Part Time", value: "Part Time" },
	{ label: "Contract", value: "Contract" },
	{ label: "Freelance", value: "Freelance" },
	{ label: "Internship", value: "Internship" },
	{ label: "Trainee", value: "Trainee" },
];

export const degreeTypes: readonly SelectOption[] = [
	{ label: "Associate in Arts (AA)", value: "Associate in Arts" },
	{ label: "Associate in Science (AS)", value: "Associate in Science" },
	{ label: "Associate in Commerce (AC)", value: "Associate in Commerce" },
	{ label: "Bachelor in Arts (BA)", value: "Bachelor in Arts" },
	{ label: "Bachelor in Science (BS)", value: "Bachelor in Science" },
	{ label: "Bachelor in Commerce (BCom)", value: "Bachelor in Commerce" },
	{ label: "Bachelor in Technology (BTech)", value: "Bachelor in Technology" },
	{ label: "Bachelor in Engineering (BE)", value: "Bachelor in Engineering" },
	{ label: "Bachelor in Law (LLB)", value: "Bachelor in Law" },
	{
		label: "Bachelor of Architecture (BArch)",
		value: "Bachelor of Architecture",
	},
	{ label: "Bachelor of Design (BDes)", value: "Bachelor of Design" },
	{ label: "Bachelor of Fine Arts (BFA)", value: "Bachelor of Fine Arts" },
	{ label: "Bachelor of Music (BMus)", value: "Bachelor of Music" },
	{ label: "Master in Arts (MA)", value: "Master in Arts" },
	{ label: "Master in Science (MS)", value: "Master in Science" },
	{ label: "Master in Commerce (MCom)", value: "Master in Commerce" },
	{ label: "Master in Technology (MTech)", value: "Master in Technology" },
	{ label: "Master in Engineering (ME)", value: "Master in Engineering" },
	{ label: "Master in Law (LLM)", value: "Master in Law" },
	{
		label: "Master in Business Administration (MBA)",
		value: "Master in Business Administration",
	},
	{ label: "Master of Architecture (MArch)", value: "Master of Architecture" },
	{ label: "Master of Design (MDes)", value: "Master of Design" },
	{ label: "Master of Fine Arts (MFA)", value: "Master of Fine Arts" },
	{ label: "Master of Music (MMus)", value: "Master of Music" },
	{ label: "Doctoral in Arts (DA)", value: "Doctoral in Arts" },
	{ label: "Doctoral in Science (DS)", value: "Doctoral in Science" },
	{ label: "Doctoral in Commerce (DCom)", value: "Doctoral in Commerce" },
	{ label: "Doctoral in Technology (DTech)", value: "Doctoral in Technology" },
	{ label: "Doctoral in Engineering (DE)", value: "Doctoral in Engineering" },
	{ label: "Doctoral in Law (LLD)", value: "Doctoral in Law" },
	{
		label: "Doctor of Philosophy in Arts (PhD)",
		value: "Doctor of Philosophy in Arts",
	},
	{
		label: "Doctor of Philosophy in Science (PhD)",
		value: "Doctor of Philosophy in Science",
	},
	{
		label: "Doctor of Philosophy in Commerce (PhD)",
		value: "Doctor of Philosophy in Commerce",
	},
	{
		label: "Doctor of Philosophy in Engineering (PhD)",
		value: "Doctor of Philosophy in Engineering",
	},
	{
		label: "Doctor of Philosophy in Law (PhD)",
		value: "Doctor of Philosophy in Law",
	},
	{ label: "Postdoctoral in Arts (PostDoc)", value: "Postdoctoral in Arts" },
	{
		label: "Postdoctoral in Science (PostDoc)",
		value: "Postdoctoral in Science",
	},
	{
		label: "Postdoctoral in Commerce (PostDoc)",
		value: "Postdoctoral in Commerce",
	},
	{
		label: "Postdoctoral in Technology (PostDoc)",
		value: "Postdoctoral in Technology",
	},
	{
		label: "Postdoctoral in Engineering (PostDoc)",
		value: "Postdoctoral in Engineering",
	},
	{ label: "Postdoctoral in Law (PostDoc)", value: "Postdoctoral in Law" },
	{ label: "Certificate in Arts (Cert)", value: "Certificate in Arts" },
	{ label: "Certificate in Science (Cert)", value: "Certificate in Science" },
	{ label: "Certificate in Commerce (Cert)", value: "Certificate in Commerce" },
	{
		label: "Higher Secondary Certificate (HSC)",
		value: "Higher Secondary Certificate",
	},
	{
		label: "Senior Secondary Certificate (SSC)",
		value: "Senior Secondary Certificate",
	},
	{ label: "Diploma in Arts (Dip)", value: "Diploma in Arts" },
	{ label: "Diploma in Science (Dip)", value: "Diploma in Science" },
	{ label: "Diploma in Commerce (Dip)", value: "Diploma in Commerce" },
	{ label: "Foundation in Arts (Fdn)", value: "Foundation in Arts" },
	{ label: "Foundation in Science (Fdn)", value: "Foundation in Science" },
	{ label: "Foundation in Commerce (Fdn)", value: "Foundation in Commerce" },
	{
		label: "Higher National Diploma (HND) in Arts (HND)",
		value: "Higher National Diploma (HND) in Arts",
	},
	{
		label: "Higher National Diploma (HND) in Science (HND)",
		value: "Higher National Diploma (HND) in Science",
	},
	{
		label: "Higher National Diploma (HND) in Commerce (HND)",
		value: "Higher National Diploma (HND) in Commerce",
	},
	{
		label: "Higher National Certificate (HNC) in Arts (HNC)",
		value: "Higher National Certificate (HNC) in Arts",
	},
	{
		label: "Higher National Certificate (HNC) in Science (HNC)",
		value: "Higher National Certificate (HNC) in Science",
	},
	{
		label: "Higher National Certificate (HNC) in Commerce (HNC)",
		value: "Higher National Certificate (HNC) in Commerce",
	},
	{
		label: "Postgraduate Certificate in Arts (PGCert)",
		value: "Postgraduate Certificate in Arts",
	},
	{
		label: "Postgraduate Certificate in Science (PGCert)",
		value: "Postgraduate Certificate in Science",
	},
	{
		label: "Postgraduate Certificate in Commerce (PGCert)",
		value: "Postgraduate Certificate in Commerce",
	},
	{
		label: "Postgraduate Diploma in Arts (PGDip)",
		value: "Postgraduate Diploma in Arts",
	},
	{
		label: "Postgraduate Diploma in Science (PGDip)",
		value: "Postgraduate Diploma in Science",
	},
	{
		label: "Postgraduate Diploma in Commerce (PGDip)",
		value: "Postgraduate Diploma in Commerce",
	},
	{
		label: "Professional Certificate in Arts (ProfCert)",
		value: "Professional Certificate in Arts",
	},
	{
		label: "Professional Certificate in Science (ProfCert)",
		value: "Professional Certificate in Science",
	},
	{
		label: "Professional Certificate in Commerce (ProfCert)",
		value: "Professional Certificate in Commerce",
	},
	{
		label: "Professional Diploma in Arts (ProfDip)",
		value: "Professional Diploma in Arts",
	},
	{
		label: "Professional Diploma in Science (ProfDip)",
		value: "Professional Diploma in Science",
	},
	{
		label: "Professional Diploma in Commerce (ProfDip)",
		value: "Professional Diploma in Commerce",
	},
	{
		label: "Bachelor of Business Administration (BBA)",
		value: "Bachelor of Business Administration",
	},
	{
		label: "Master of Business Administration (MBA)",
		value: "Master of Business Administration",
	},
	{
		label: "Doctor of Business Administration (DBA)",
		value: "Doctor of Business Administration",
	},
	{
		label: "Certificate in Computer Science (Cert)",
		value: "Certificate in Computer Science",
	},
	{
		label: "Diploma in Computer Science (Dip)",
		value: "Diploma in Computer Science",
	},
	{
		label: "Bachelor of Computer Science (BCS)",
		value: "Bachelor of Computer Science",
	},
	{
		label: "Master of Computer Science (MCS)",
		value: "Master of Computer Science",
	},
	{
		label: "Doctor of Computer Science (DCS)",
		value: "Doctor of Computer Science",
	},
	{
		label: "Certificate in Information Technology (Cert)",
		value: "Certificate in Information Technology",
	},
	{
		label: "Diploma in Information Technology (Dip)",
		value: "Diploma in Information Technology",
	},
	{
		label: "Bachelor of Information Technology (BIT)",
		value: "Bachelor of Information Technology",
	},
	{
		label: "Master of Information Technology (MIT)",
		value: "Master of Information Technology",
	},
	{
		label: "Doctor of Information Technology (DIT)",
		value: "Doctor of Information Technology",
	},
];

export const fieldsOfStudy: readonly SelectOption[] = [
	{ label: "Accounting", value: "Accounting" },
	{ label: "Actuarial Science", value: "Actuarial Science" },
	{ label: "Aeronautical Engineering", value: "Aeronautical Engineering" },
	{ label: "Agricultural Engineering", value: "Agricultural Engineering" },
	{ label: "Agriculture", value: "Agriculture" },
	{ label: "Anatomy", value: "Anatomy" },
	{ label: "Anthropology", value: "Anthropology" },
	{ label: "Applied Mathematics", value: "Applied Mathematics" },
	{ label: "Applied Physics", value: "Applied Physics" },
	{ label: "Archeology", value: "Archeology" },
	{ label: "Architecture", value: "Architecture" },
	{ label: "Art", value: "Art" },
	{ label: "Art History", value: "Art History" },
	{ label: "Astronomy", value: "Astronomy" },
	{ label: "Ayurveda", value: "Ayurveda" },
	{ label: "Biochemistry", value: "Biochemistry" },
	{ label: "Biology", value: "Biology" },
	{ label: "Biotechnology", value: "Biotechnology" },
	{ label: "Botany", value: "Botany" },
	{ label: "Business", value: "Business" },
	{ label: "Business Administration", value: "Business Administration" },
	{ label: "Chemical Engineering", value: "Chemical Engineering" },
	{ label: "Chemistry", value: "Chemistry" },
	{ label: "Civil Engineering", value: "Civil Engineering" },
	{ label: "Commerce", value: "Commerce" },
	{ label: "Communication", value: "Communication" },
	{ label: "Computer Applications", value: "Computer Applications" },
	{ label: "Computer Engineering", value: "Computer Engineering" },
	{ label: "Computer Science", value: "Computer Science" },
	{ label: "Criminology", value: "Criminology" },
	{ label: "Dentistry", value: "Dentistry" },
	{ label: "Design", value: "Design" },
	{ label: "Dental Surgery", value: "Dental Surgery" },
	{ label: "Economics", value: "Economics" },
	{ label: "Electrical Engineering", value: "Electrical Engineering" },
	{ label: "Engineering", value: "Engineering" },
	{ label: "English", value: "English" },
	{ label: "English Literature", value: "English Literature" },
	{ label: "Environmental Science", value: "Environmental Science" },
	{ label: "Fashion Technology", value: "Fashion Technology" },
	{ label: "Film", value: "Film" },
	{ label: "Fine Arts", value: "Fine Arts" },
	{ label: "Food Technology", value: "Food Technology" },
	{ label: "Geography", value: "Geography" },
	{ label: "Geology", value: "Geology" },
	{ label: "Hindi Literature", value: "Hindi Literature" },
	{ label: "History", value: "History" },
	{ label: "Home Science", value: "Home Science" },
	{ label: "Hospital Administration", value: "Hospital Administration" },
	{ label: "Hotel Management", value: "Hotel Management" },
	{ label: "Human Resource Management", value: "Human Resource Management" },
	{ label: "Human Resources", value: "Human Resources" },
	{ label: "Industrial Engineering", value: "Industrial Engineering" },
	{ label: "Information Technology", value: "Information Technology" },
	{
		label: "Instrumentation Engineering",
		value: "Instrumentation Engineering",
	},
	{ label: "Interior Design", value: "Interior Design" },
	{ label: "International Relations", value: "International Relations" },
	{
		label: "Journalism and Mass Communication",
		value: "Journalism and Mass Communication",
	},
	{ label: "Law", value: "Law" },
	{
		label: "Library and Information Science",
		value: "Library and Information Science",
	},
	{ label: "Linguistics", value: "Linguistics" },
	{ label: "Management", value: "Management" },
	{ label: "Management Studies", value: "Management Studies" },
	{ label: "Marketing", value: "Marketing" },
	{ label: "Material Science", value: "Material Science" },
	{ label: "Mathematics", value: "Mathematics" },
	{ label: "Mechanical Engineering", value: "Mechanical Engineering" },
	{
		label: "Medical Laboratory Technology",
		value: "Medical Laboratory Technology",
	},
	{ label: "Medicine", value: "Medicine" },
	{ label: "Microbiology", value: "Microbiology" },
	{ label: "Nursing", value: "Nursing" },
	{ label: "Pharmaceutical Sciences", value: "Pharmaceutical Sciences" },
	{ label: "Philosophy", value: "Philosophy" },
	{ label: "Physical Education", value: "Physical Education" },
	{ label: "Physics", value: "Physics" },
	{ label: "Physiology", value: "Physiology" },
	{ label: "Psychology", value: "Psychology" },
	{ label: "Public Administration", value: "Public Administration" },
	{ label: "Sanskrit", value: "Sanskrit" },
	{ label: "Social Work", value: "Social Work" },
	{ label: "Sociology", value: "Sociology" },
	{ label: "Statistics", value: "Statistics" },
	{
		label: "Telecommunication Engineering",
		value: "Telecommunication Engineering",
	},
	{ label: "Textile Technology", value: "Textile Technology" },
	{ label: "Tourism Management", value: "Tourism Management" },
	{ label: "Toxicology", value: "Toxicology" },
	{ label: "Urban Planning", value: "Urban Planning" },
	{ label: "Veterinary Medicine", value: "Veterinary Medicine" },
	{ label: "Zoology", value: "Zoology" },
];

export const locationType: readonly SelectOption[] = [
	{ label: "Remote", value: "Remote" },
	{ label: "On-Site", value: "On-Site" },
	{ label: "Hybrid", value: "Hybrid" },
];

export const levels: readonly SelectOption[] = [
	{ label: "Junior Level", value: "Junior Level" },
	{ label: "Mid Level", value: "Mid Level" },
	{ label: "High Level", value: "High Level" },
	{ label: "Top Management", value: "Top Management" },
];

export const requiredExperience: readonly SelectOption[] = [
	{ value: "0-1", label: "Less than 1 Year" },
	{ value: "1-3", label: "1 to 3 Years" },
	{ value: "3-5", label: "3 to 5 Years" },
	{ value: "5-7", label: "5 to 7 Years" },
	{ value: "7-10", label: "7 to 10 Years" },
	{ value: "10-12", label: "10 to 12 Years" },
	{ value: "13-15", label: "13 to 15 Years" },
	{ value: "15+", label: "15+ Years" },
];

export const experience: readonly SelectOption[] = [
	{ value: "0", label: "Less than 1 Year" },
	{ value: "1", label: "1+ Year" },
	{ value: "2", label: "2+ Years" },
	{ value: "3", label: "3+ Years" },
	{ value: "4", label: "4+ Years" },
	{ value: "5", label: "5+ Years" },
	{ value: "6", label: "6+ Years" },
	{ value: "7", label: "7+ Years" },
	{ value: "8", label: "8+ Years" },
	{ value: "9", label: "9+ Years" },
	{ value: "10", label: "10+ Years" },
	{ value: "11", label: "11+ Years" },
	{ value: "12", label: "12+ Years" },
	{ value: "13", label: "13+ Years" },
	{ value: "14", label: "14+ Years" },
	{ value: "15", label: "More than 15 Years" },
];

export const sectors: SelectOption[] = [
	{
		label: "Engineering",
		value: "Engineering",
	},
	{
		label: "Product Engineering",
		value: "Product Engineering",
	},
	{
		label: "Information Technology",
		value: "Information Technology",
	},
	{
		label: "Computer Software",
		value: "Computer Software",
	},
	{
		label: "Computer Hardware",
		value: "Computer Hardware",
	},
	{
		label: "Telecommunications",
		value: "Telecommunications",
	},
	{
		label: "Internet/E-commerce",
		value: "Internet/E-commerce",
	},
	{ label: "Data Analytics", value: "Data Analytics" },
	{ label: "Cybersecurity", value: "Cybersecurity" },
	{ label: "Accounting", value: "Accounting" },
	{ label: "Finance", value: "Finance" },
	{ label: "Banking", value: "Banking" },
	{ label: "Insurance", value: "Insurance" },
	{ label: "Marketing", value: "Marketing" },
	{ label: "Advertising", value: "Advertising" },
	{
		label: "Public Relations",
		value: "Public Relations",
	},
	{ label: "Human Resources", value: "Human Resources" },
	{
		label: "Business Consulting",
		value: "Business Consulting",
	},
	{ label: "Legal Services", value: "Legal Services" },
	{
		label: "Healthcare Services",
		value: "Healthcare Services",
	},
	{ label: "Pharmaceuticals", value: "Pharmaceuticals" },
	{ label: "Biotechnology", value: "Biotechnology" },
	{ label: "Medical Devices", value: "Medical Devices" },
	{ label: "Construction", value: "Construction" },
	{ label: "Architecture", value: "Architecture" },
	{ label: "Engineering", value: "Engineering" },
	{ label: "Manufacturing", value: "Manufacturing" },
	{
		label: "Logistics/Supply Chain",
		value: "Logistics/Supply Chain",
	},
	{ label: "Retail", value: "Retail" },
	{ label: "Hospitality", value: "Hospitality" },
	{ label: "Food Services", value: "Food Services" },
	{ label: "Aviation", value: "Aviation" },
	{ label: "Automotive", value: "Automotive" },
	{ label: "Oil and Gas", value: "Oil and Gas" },
	{ label: "Utilities", value: "Utilities" },
	{
		label: "Renewable Energy",
		value: "Renewable Energy",
	},
	{
		label: "Education Services",
		value: "Education Services",
	},
	{
		label: "Training and Development",
		value: "Training and Development",
	},
	{
		label: "Media/Entertainment",
		value: "Media/Entertainment",
	},
	{ label: "Publishing", value: "Publishing" },
	{ label: "Design Services", value: "Design Services" },
	{ label: "Creative Arts", value: "Creative Arts" },
];

export const functions: readonly SelectOption[] = [
	{
		label: "Software Development",
		value: "Software Development",
	},
	{ label: "Web Development", value: "Web Development" },
	{
		label: "Mobile App Development",
		value: "Mobile App Development",
	},
	{ label: "Cloud Computing", value: "Cloud Computing" },
	{
		label: "Artificial Intelligence",
		value: "Artificial Intelligence",
	},
	{
		label: "Machine Learning",
		value: "Machine Learning",
	},
	{ label: "Data Science", value: "Data Science" },
	{ label: "Cybersecurity", value: "Cybersecurity" },
	{
		label: "Network Administration",
		value: "Network Administration",
	},
	{ label: "IT Support", value: "IT Support" },
	{
		label: "Financial Analysis",
		value: "Financial Analysis",
	},
	{
		label: "Investment Banking",
		value: "Investment Banking",
	},
	{
		label: "Audit and Assurance",
		value: "Audit and Assurance",
	},
	{ label: "Risk Management", value: "Risk Management" },
	{
		label: "Corporate Finance",
		value: "Corporate Finance",
	},
	{
		label: "Digital Marketing",
		value: "Digital Marketing",
	},
	{
		label: "Social Media Marketing",
		value: "Social Media Marketing",
	},
	{
		label: "Content Marketing",
		value: "Content Marketing",
	},
	{ label: "Email Marketing", value: "Email Marketing" },
	{
		label: "Search Engine Optimization",
		value: "Search Engine Optimization",
	},
	{
		label: "Talent Acquisition",
		value: "Talent Acquisition",
	},
	{
		label: "Compensation and Benefits",
		value: "Compensation and Benefits",
	},
	{
		label: "Employee Relations",
		value: "Employee Relations",
	},
	{
		label: "Organizational Development",
		value: "Organizational Development",
	},
	{
		label: "Business Strategy",
		value: "Business Strategy",
	},
	{
		label: "Operations Management",
		value: "Operations Management",
	},
	{
		label: "Project Management",
		value: "Project Management",
	},
	{
		label: "Supply Chain Management",
		value: "Supply Chain Management",
	},
	{ label: "Corporate Law", value: "Corporate Law" },
	{ label: "Litigation", value: "Litigation" },
	{
		label: "Intellectual Property",
		value: "Intellectual Property",
	},
	{ label: "Nursing", value: "Nursing" },
	{ label: "Physician", value: "Physician" },
	{ label: "Pharmacist", value: "Pharmacist" },
	{
		label: "Medical Technologist",
		value: "Medical Technologist",
	},
	{
		label: "Clinical Research",
		value: "Clinical Research",
	},
	{
		label: "Construction Management",
		value: "Construction Management",
	},
	{
		label: "Civil Engineering",
		value: "Civil Engineering",
	},
	{
		label: "Mechanical Engineering",
		value: "Mechanical Engineering",
	},
	{
		label: "Electrical Engineering",
		value: "Electrical Engineering",
	},
	{
		label: "Industrial Engineering",
		value: "Industrial Engineering",
	},
	{
		label: "Quality Assurance",
		value: "Quality Assurance",
	},
	{
		label: "Manufacturing Engineering",
		value: "Manufacturing Engineering",
	},
];

export const skills: SelectOption[] = [
	{ label: "Java", value: "Java" },
	{ label: "Python", value: "Python" },
	{ label: "C++", value: "C++" },
	{ label: "JavaScript", value: "JavaScript" },
	{ label: "React", value: "React" },
	{ label: "Angular", value: "Angular" },
	{ label: "Node.js", value: "Node.js" },
	{ label: "AWS", value: "AWS" },
	{ label: "Azure", value: "Azure" },
	{ label: "Google Cloud Platform", value: "Google Cloud Platform" },
	{ label: "Docker", value: "Docker" },
	{ label: "Kubernetes", value: "Kubernetes" },
	{ label: "SQL", value: "SQL" },
	{ label: "NoSQL", value: "NoSQL" },
	{ label: "Tableau", value: "Tableau" },
	{ label: "Power BI", value: "Power BI" },
	{ label: "Cyber Security", value: "Cyber Security" },
	{ label: "Ethical Hacking", value: "Ethical Hacking" },
	{ label: "Network Security", value: "Network Security" },
	{ label: "Financial Modeling", value: "Financial Modeling" },
	{ label: "Valuation", value: "Valuation" },
	{ label: "Mergers and Acquisitions", value: "Mergers and Acquisitions" },
	{ label: "Digital Marketing", value: "Digital Marketing" },
	{ label: "Search Engine Optimization", value: "Search Engine Optimization" },
	{ label: "Social Media Marketing", value: "Social Media Marketing" },
	{ label: "Content Marketing", value: "Content Marketing" },
	{ label: "Email Marketing", value: "Email Marketing" },
	{ label: "Talent Acquisition", value: "Talent Acquisition" },
	{ label: "Compensation and Benefits", value: "Compensation and Benefits" },
	{ label: "HR Analytics", value: "HR Analytics" },
	{ label: "Business Strategy", value: "Business Strategy" },
	{ label: "Operations Management", value: "Operations Management" },
	{ label: "Project Management", value: "Project Management" },
	{ label: "Supply Chain Management", value: "Supply Chain Management" },
	{ label: "Corporate Law", value: "Corporate Law" },
	{ label: "Litigation", value: "Litigation" },
	{ label: "Intellectual Property", value: "Intellectual Property" },
	{ label: "Nursing", value: "Nursing" },
	{ label: "Physician", value: "Physician" },
	{ label: "Pharmacology", value: "Pharmacology" },
	{ label: "Clinical Research", value: "Clinical Research" },
	{ label: "Construction Management", value: "Construction Management" },
	{ label: "Civil Engineering", value: "Civil Engineering" },
	{ label: "Mechanical Engineering", value: "Mechanical Engineering" },
	{ label: "Electrical Engineering", value: "Electrical Engineering" },
	{ label: "Industrial Engineering", value: "Industrial Engineering" },
	{ label: "Quality Assurance", value: "Quality Assurance" },
	{ label: "Manufacturing Engineering", value: "Manufacturing Engineering" },
	{ label: "PHP", value: "PHP" },
	{ label: "Ruby on Rails", value: "Ruby on Rails" },
	{ label: ".NET", value: ".NET" },
	{ label: "Swift", value: "Swift" },
	{ label: "Kotlin", value: "Kotlin" },
	{ label: "React Native", value: "React Native" },
	{ label: "Flutter", value: "Flutter" },
	{ label: "TensorFlow", value: "TensorFlow" },
	{ label: "PyTorch", value: "PyTorch" },
	{
		label: "Natural Language Processing",
		value: "Natural Language Processing",
	},
	{ label: "Computer Vision", value: "Computer Vision" },
	{ label: "Deep Learning", value: "Deep Learning" },
	{
		label: "Machine Learning Engineering",
		value: "Machine Learning Engineering",
	},
	{ label: "Data Visualization", value: "Data Visualization" },
	{ label: "Data Mining", value: "Data Mining" },
	{ label: "Data Warehousing", value: "Data Warehousing" },
	{ label: "Big Data Analytics", value: "Big Data Analytics" },
	{ label: "Hadoop", value: "Hadoop" },
	{ label: "Spark", value: "Spark" },
	{ label: "Ethical Hacking", value: "Ethical Hacking" },
	{ label: "Penetration Testing", value: "Penetration Testing" },
	{ label: "Risk Management", value: "Risk Management" },
	{ label: "Compliance", value: "Compliance" },
	{ label: "Financial Reporting", value: "Financial Reporting" },
	{ label: "Budgeting and Forecasting", value: "Budgeting and Forecasting" },
	{ label: "Tax Planning", value: "Tax Planning" },
	{
		label: "User Experience (UX) Design",
		value: "User Experience (UX) Design",
	},
	{ label: "User Interface (UI) Design", value: "User Interface (UI) Design" },
	{ label: "Graphic Design", value: "Graphic Design" },
	{ label: "Video Editing", value: "Video Editing" },
	{ label: "Adobe Creative Cloud", value: "Adobe Creative Cloud" },
	{ label: "Salesforce", value: "Salesforce" },
	{ label: "SAP", value: "SAP" },
	{ label: "Oracle", value: "Oracle" },
	{ label: "Lean Six Sigma", value: "Lean Six Sigma" },
	{ label: "Agile Methodology", value: "Agile Methodology" },
	{ label: "Scrum", value: "Scrum" },
	{ label: "Kanban", value: "Kanban" },
	{ label: "Contract Law", value: "Contract Law" },
	{ label: "Legal Research", value: "Legal Research" },
	{ label: "Medical Coding", value: "Medical Coding" },
	{ label: "Electronic Health Records", value: "Electronic Health Records" },
	{ label: "Surgical Procedures", value: "Surgical Procedures" },
	{ label: "Structural Engineering", value: "Structural Engineering" },
	{ label: "AutoCAD", value: "AutoCAD" },
	{ label: "3D Modeling", value: "3D Modeling" },
	{ label: "Finite Element Analysis", value: "Finite Element Analysis" },
	{ label: "Lean Manufacturing", value: "Lean Manufacturing" },
	{ label: "Six Sigma", value: "Six Sigma" },
	{ label: "Robotics", value: "Robotics" },
	{
		label: "Programmable Logic Controllers",
		value: "Programmable Logic Controllers",
	},
];

export const companyTypes: readonly SelectOption[] = [
    { label: "Private", value: "Private" },
    { label: "Public", value: "Public" },
    { label: "Non-Profit", value: "Non-Profit" },
    { label: "Government", value: "Government" },
    { label: "Partnership", value: "Partnership" },
    { label: "Sole Proprietorship", value: "Sole Proprietorship" },
    { label: "Cooperative", value: "Cooperative" },
    { label: "LLC", value: "Limited Liability Company" },
    { label: "Corporation", value: "Corporation" },
];