const courses = [
    {
        key: 0,
        name: 'English For Children',
        Category: 'Chinese || English',
        Students: 46,
        Lessions: 12,
        Course_fee: 'Free',
        Duration: '12 Weeks',
        img: 'https://language-school.cmsmasters.net/wp-content/uploads/2015/12/Depositphotos_63889211_original-580x400.jpg',
        instructor_name: 'Kaylin Moore',
        instructor_img: 'https://listingthemes.com/studypoint/v1.2/assets/images/teachers/teacher-profile.jpg',
        instructor_phone: '+(02) 123 456 7989'

    },
    {
        key: 1,
        name: 'Intensive Course',
        Category: 'Fench || English',
        Students: 46,
        Lessions: 15,
        Duration: '20 Weeks',
        Course_fee: '$250',
        img: 'https://language-school.cmsmasters.net/wp-content/uploads/2015/08/Depositphotos_46326837_original-580x400.jpg',
        instructor_name: 'Edith Williams',
        instructor_img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        instructor_phone: '+(02) 123 456 7989'

    },
    {
        key: 2,
        name: '30-60-90 Business',
        Category: 'German || English',
        Students: 46,
        Lessions: 10,
        Duration: '24 Weeks',
        Course_fee: '$250',
        img: 'https://language-school.cmsmasters.net/wp-content/uploads/2015/12/Depositphotos_72150359_original-580x400.jpg',
        instructor_name: 'John Brown',
        instructor_img: 'https://images.unsplash.com/photo-1543269664-76bc3997d9ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
        instructor_phone: '+(02) 123 456 7999'

    },
    {
        key: 3,
        name: 'Language Trainings',
        Category: 'Spanish || English',
        Students: 67,
        Lessions: 10,
        Duration: '21 Weeks',
        Course_fee: '$320',
        img: 'https://language-school.cmsmasters.net/wp-content/uploads/2015/12/Depositphotos_58582087_original-580x400.jpg',
        instructor_name: 'Kaylin Moore',
        instructor_img: 'https://images.unsplash.com/photo-1564130987042-acbca1b51e8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=424&q=80',
        instructor_phone: '+(02) 123 486 7999'

    },
    {
        key: 4,
        name: 'BASIC SKILLS',
        Category: 'Chinese|| French',
        Students: 53,
        Lessions: 16,
        Duration: '23 Weeks',
        Course_fee: '$180',
        img: 'https://language-school.cmsmasters.net/wp-content/uploads/2015/07/Depositphotos_66455527_original-580x400.jpg',
        instructor_name: 'Mandy Tom',
        instructor_img: 'https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80',
        instructor_phone: '+(02) 123 486 9999'


    },
    {
        key: 5,
        name: 'Intensive Course',
        Category: 'Fench || English',
        Students: 46,
        Lessions: 15,
        Duration: '20 Weeks',
        Course_fee: '$250',
        img: 'https://language-school.cmsmasters.net/wp-content/uploads/2015/08/Depositphotos_46326837_original-580x400.jpg',
        instructor_name: 'Edith Williams',
        instructor_img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
        instructor_phone: '+(02) 123 456 7989'

    },

    {
        key: 5,
        name: 'Mastering Grammar',
        Category: 'Fench || English',
        Students: 46,
        Lessions: 15,
        Duration: '20 Weeks',
        Course_fee: '$250',
        img: 'https://language-school.cmsmasters.net/wp-content/uploads/2015/07/Depositphotos_73936385_original1-580x400.jpg',
        instructor_name: 'Edith Williams',
        instructor_img: 'https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        instructor_phone: '+(02) 123 456 7989'

    },
    {
        key: 6,
        name: 'Language Studies',
        Category: 'Fench || English',
        Students: 46,
        Lessions: 5,
        Duration: '12 Weeks',
        Course_fee: '$90',
        img: 'https://language-school.cmsmasters.net/wp-content/uploads/2015/12/Depositphotos_85241664_original1-580x400.jpg',
        instructor_name: 'Eric Morgan',
        instructor_img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        instructor_phone: '+(02) 123 786 7989'

    },
    {
        key: 7,
        name: 'Second Language',
        Category: 'Fench || English',
        Students: 50,
        Lessions: 5,
        Duration: '12 Weeks',
        Course_fee: '$435',
        img: 'https://language-school.cmsmasters.net/wp-content/uploads/2015/11/Depositphotos_88893684_original-580x387.jpg',
        instructor_name: 'Eric Morgan',
        instructor_img: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        instructor_phone: '+(02) 123 786 7989'

    },
    {
        key: 8,
        name: 'Language Studies',
        Category: 'Garman || English',
        Students: 46,
        Lessions: 5,
        Duration: '12 Weeks',
        Course_fee: '$90',
        img: 'https://images.unsplash.com/photo-1512805668868-1608a189cc2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80',
        instructor_name: 'Toms Morgan',
        instructor_img: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        instructor_phone: '+(02) 123 786 7989'

    },
]