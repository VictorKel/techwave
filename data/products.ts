import { Product } from "../types";

export const products: Product[] = [
  // Cabling
  {
    id: "cable-001",
    name: "Mixed Horizontal PDU 4 x C13 + 5 x C19",
    part: "E700002",
    brand: "PowerData",
    price: 5000000,
    availability: "In Stock",
    category: "Cabling",
    images: ['/images/pdu1.png', '/images/connect-wire.png', '/images/wire.png'],
    features: [
        'IEC PDUs with C13 & C19 Mixed Sockets.',
        '1U 19" Horizontally Rack Mounted.',
        'Quality UK manufactured.',
        'Punched and folded steel units with textured black powder coat finish. Bespoke colours available.',
        'All come with 3m lead as standard. Bespoke lengths available.',
        'Genuine Integra Brand power distribution units.',
    ],
    specifications: [
        'Steel Chassis Construction',
        'Black RAL 9005 Fine Texture Powder Coat Finish',
        'M5 External Earth Stud c/w Anti Shake Washer & Nut',
        'Red Illuminated 16A Double Pole Switch c/w Switch Cover (Where Applicable)',
        'Operating Voltage 250V 50Hz AC max',
        'EN IEC 62368 1:2020+A11:2025',
        "Speed: up to 1000Mbps",
        "Connectors: RJ45",
        "Color: Black"
    ]
  },
  {
    id: "cable-002",
    name: "Mercusys AC12 Cable Router  Dual  Band with Switch 3x 10/100",
    part: "E700056",
    brand: "Cable Router",
    price: 6009090,
    availability: "In Stock",
    category: "Cabling",
    images: ['/images/router.png', '/images/connect-wire.png', '/images/wire.png'],
    features: [
        'IEC PDUs with C13 & C19 Mixed Sockets.',
        '1U 19" Horizontally Rack Mounted.',
        'Quality UK manufactured.',
        'Punched and folded steel units with textured black powder coat finish. Bespoke colours available.',
        'All come with 3m lead as standard. Bespoke lengths available.',
        'Genuine Integra Brand power distribution units.',
    ],
    specifications: [
        'Steel Chassis Construction',
        'Black RAL 9005 Fine Texture Powder Coat Finish',
        'M5 External Earth Stud c/w Anti Shake Washer & Nut',
        'Red Illuminated 16A Double Pole Switch c/w Switch Cover (Where Applicable)',
        'Operating Voltage 250V 50Hz AC max',
        'EN IEC 62368 1:2020+A11:2025',
        "Speed: up to 1000Mbps",
        "Connectors: RJ45",
        "Color: Black"
    ]
  },
  {
    id: "cable-003",
    name: "Mixed Horizontal PDU  4 x C13 + 5 x C19",
    part: "E707902",
    brand: "PowerData",
    price: 9800000,
    availability: "In Stock",
    category: "Cabling",
    images: ['/images/pdu2.png', '/images/connect-wire.png', '/images/wire.png'],
    features: [
        'IEC PDUs with C13 & C19 Mixed Sockets.',
        '1U 19" Horizontally Rack Mounted.',
        'Quality UK manufactured.',
        'Punched and folded steel units with textured black powder coat finish. Bespoke colours available.',
        'All come with 3m lead as standard. Bespoke lengths available.',
        'Genuine Integra Brand power distribution units.',
    ],
    specifications: [
        'Steel Chassis Construction',
        'Black RAL 9005 Fine Texture Powder Coat Finish',
        'Operating Voltage 250V 50Hz AC max',
        'EN IEC 62368 1:2020+A11:2025',
        "Speed: up to 1000Mbps",
        "Connectors: RJ45",
        "Color: Black"
    ]
  },

  // Tracking Device
  {
    id: "track-001",
    name: "Get proof of delivery with  Hikvision",
    part: "GPS-TRK-V1",
    brand: "TrackMaster",
    price: 2500000,
    availability: "In Stock",
    category: "Tracking Device",
    images: ["/images/cam1.png", "/images/cam1.png", "/images/cam1.png"],
    features: [
      "Real-time location updates",
      "SIM-enabled tracking",
      "Long battery life"
    ],
    specifications: [
      "Battery: 5000mAh",
      "Accuracy: ±5m",
      "Connectivity: GSM/GPRS",
      "App support: iOS & Android"
    ]
  },

  // Fuse
  {
    id: "fuse-001",
    name: "Automotive Blade Fuse Set",
    part: "FUSE-BLAD-SET",
    brand: "AutoGuard",
    price: 3500,
    availability: "In Stock",
    category: "Fuse",
    images: ["/images/fuse.png", "/images/fuse.png", "/images/fuse.png"],
    features: [
      "Pack of 10 assorted fuses",
      "Color coded for easy identification",
      "High temperature resistant"
    ],
    specifications: [
      "Voltage Rating: 32V",
      "Current Range: 5A–30A",
      "Material: Zinc Alloy",
      "Standard: SAE J2077"
    ]
  },
  {
    id: "fuse-002",
    name: "Automotive Blade Fuse Set",
    part: "FUSE-BLAD-SET",
    brand: "AutoGuard",
    price: 350000,
    availability: "In Stock",
    category: "Fuse",
    images: ["/images/fuse.png", "/images/fuse.png", "/images/fuse.png"],
    features: [
      "Pack of 10 assorted fuses",
      "Color coded for easy identification",
      "High temperature resistant"
    ],
    specifications: [
      "Voltage Rating: 32V",
      "Current Range: 5A–30A",
      "Material: Zinc Alloy",
      "Standard: SAE J2077"
    ]
  },
  {
    id: "fuse-003",
    name: "Discover Hikvision's Latest  ColorVu Technology",
    part: "FUSE-BLAD-SET",
    brand: "AutoGuard",
    price: 3500,
    availability: "In Stock",
    category: "Fuse",
    images: ["/images/cam2.png", "/images/fuse.png", "/images/fuse.png"],
    features: [
      "Pack of 10 assorted fuses",
      "Color coded for easy identification",
      "High temperature resistant"
    ],
    specifications: [
      "Voltage Rating: 32V",
      "Current Range: 5A–30A",
      "Material: Zinc Alloy",
      "Standard: SAE J2077"
    ]
  },

  // Radiation Detection Equipment
  {
    id: "rad-001",
    name: "Portable Geiger Counter",
    part: "RD-GC100",
    brand: "SafeDetect",
    price: 120000,
    availability: "Limited Stock",
    category: "Radiation Detection Equipment",
    images: ["/images/cam1.png", "/images/cam1.png", "/images/cam1.png"],
    features: [
      "Real-time radiation measurement",
      "Compact and lightweight",
      "Rechargeable battery"
    ],
    specifications: [
      "Range: 0.01 to 1000 µSv/h",
      "Sensor Type: Geiger-Müller Tube",
      "Battery Life: Up to 72 hours",
      "Display: LCD with backlight"
    ]
  },
  {
    id: "rad-002",
    name: "Portable Geiger Counter",
    part: "RD-GC100",
    brand: "SafeDetect",
    price: 120000,
    availability: "Limited Stock",
    category: "Radiation Detection Equipment",
    images: ["/images/cam2.png", "/images/fuse.png", "/images/fuse.png"],
    features: [
      "Real-time radiation measurement",
      "Compact and lightweight",
      "Rechargeable battery"
    ],
    specifications: [
      "Range: 0.01 to 1000 µSv/h",
      "Sensor Type: Geiger-Müller Tube",
      "Battery Life: Up to 72 hours",
      "Display: LCD with backlight"
    ]
  },
  {
    id: "rad-003",
    name: "Portable Geiger Counter",
    part: "RD-GC100",
    brand: "SafeDetect",
    price: 120000,
    availability: "Limited Stock",
    category: "Radiation Detection Equipment",
    images: ["/images/cam1.png", "/images/fuse.png", "/images/cam2.png"],
    features: [
      "Real-time radiation measurement",
      "Compact and lightweight",
      "Rechargeable battery"
    ],
    specifications: [
      "Range: 0.01 to 1000 µSv/h",
      "Sensor Type: Geiger-Müller Tube",
      "Battery Life: Up to 72 hours",
      "Display: LCD with backlight"
    ]
  }
];




// export interface Product {
//     id: string;
//     title: string;
//     image: string;
//     price: number;
//     category: string;
//     isNewArrival?: boolean;
// }
  
// export const products: Product[] = [
//     {
//       id: '1',
//       title: 'Mixed Horizontal PDU 4 x C13 + 5 x C19',
//       image: '/images/product1.jpg',
//       price: 500000,
//       category: 'Power Distribution',
//       isNewArrival: true,
//     },
//     {
//       id: '2',
//       title: 'Mercusys AC12 Cable Router',
//       image: '/images/product2.jpg',
//       price: 6000000,
//       category: 'Networking',
//       isNewArrival: true,
//     },
//     {
//       id: '3',
//       title: 'Ubiquiti EdgeRouter X',
//       image: '/images/product3.jpg',
//       price: 800000,
//       category: 'Networking',
//     },
//     // more...
// ];
  