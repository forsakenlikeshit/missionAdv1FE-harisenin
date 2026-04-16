const courseThumbnails = import.meta.glob('../assets/images/Thumbnail*.png', { eager: true });
const authorAvatars = import.meta.glob('../assets/images/Avatar*.png', { eager: true });

const thumbnails = Object.entries(courseThumbnails)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, module]) => module.default);

const avatars = Object.entries(authorAvatars)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, module]) => module.default);

const defaultCourses = [
  {
    id: 1,
    thumbnail: thumbnails[0],
    title: 'Big 4 Auditor Financial Analyst',
    description:
      'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    authorName: 'Jenna Ortega',
    authorJob: 'Senior Accountant',
    authorCompany: 'Gojek',
    authorAvatar: avatars[0],
    rating: 3.5,
    reviews: 86,
    price: 'Rp 300K',
  },
  {
    id: 2,
    thumbnail: thumbnails[1],
    title: 'UI/UX Design Mastery',
    description: 'Pelajari prinsip desain modern dan praktik terbaik industri',
    authorName: 'John Doe',
    authorJob: 'Product Designer',
    authorCompany: 'Tokopedia',
    authorAvatar: avatars[1],
    rating: 4.8,
    reviews: 120,
    price: 'Rp 450K',
  },
  {
    id: 3,
    thumbnail: thumbnails[2],
    title: 'Big 4 Auditor Financial Analyst',
    description:
      'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    authorName: 'Jenna Ortega',
    authorJob: 'Senior Accountant',
    authorCompany: 'Gojek',
    authorAvatar: avatars[2],
    rating: 4.0,
    reviews: 120,
    price: 'Rp 300K',
  },
  {
    id: 4,
    thumbnail: thumbnails[3],
    title: 'UI/UX Design Mastery',
    description: 'Pelajari prinsip desain modern dan praktik terbaik industri',
    authorName: 'John Doe',
    authorJob: 'Product Designer',
    authorCompany: 'Tokopedia',
    authorAvatar: avatars[3],
    rating: 4.5,
    reviews: 120,
    price: 'Rp 450K',
  },
  {
    id: 5,
    thumbnail: thumbnails[4],
    title: 'Big 4 Auditor Financial Analyst',
    description:
      'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    authorName: 'Jenna Ortega',
    authorJob: 'Senior Accountant',
    authorCompany: 'Gojek',
    authorAvatar: avatars[4],
    rating: 3.5,
    reviews: 120,
    price: 'Rp 300K',
  },
  {
    id: 6,
    thumbnail: thumbnails[5],
    title: 'UI/UX Design Mastery',
    description: 'Pelajari prinsip desain modern dan praktik terbaik industri',
    authorName: 'John Doe',
    authorJob: 'Product Designer',
    authorCompany: 'Tokopedia',
    authorAvatar: avatars[5],
    rating: 3.0,
    reviews: 120,
    price: 'Rp 450K',
  },
  {
    id: 7,
    thumbnail: thumbnails[6],
    title: 'Big 4 Auditor Financial Analyst',
    description:
      'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    authorName: 'Jenna Ortega',
    authorJob: 'Senior Accountant',
    authorCompany: 'Gojek',
    authorAvatar: avatars[6],
    rating: 2.8,
    reviews: 120,
    price: 'Rp 300K',
  },
  {
    id: 8,
    thumbnail: thumbnails[7],
    title: 'UI/UX Design Mastery',
    description: 'Pelajari prinsip desain modern dan praktik terbaik industri',
    authorName: 'John Doe',
    authorJob: 'Product Designer',
    authorCompany: 'Tokopedia',
    authorAvatar: avatars[7],
    rating: 4.2,
    reviews: 120,
    price: 'Rp 450K',
  },
  {
    id: 9,
    thumbnail: thumbnails[8],
    title: 'Big 4 Auditor Financial Analyst',
    description:
      'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik',
    authorName: 'Jenna Ortega',
    authorJob: 'Senior Accountant',
    authorCompany: 'Gojek',
    authorAvatar: avatars[7],
    rating: 3.8,
    reviews: 120,
    price: 'Rp 300K',
  },
];

export default defaultCourses;
