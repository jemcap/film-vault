import { createContext } from "react";

const productsArr = [
  {
    id: "1",
    text: "Sony XM4",
    price: 215.99,
    image: "",
  },
  {
    id: "2",
    text: "Anker Soundcore Liberty Air 2",
    price: 99.99,
    image: "https://example.com/images/anker_soundcore.jpg",
  },
  {
    id: "3",
    text: "Logitech MX Master 3",
    price: 99.99,
    image: "https://example.com/images/logitech_mx_master_3.jpg",
  },
  {
    id: "4",
    text: "Amazon Echo Dot (4th Gen)",
    price: 49.99,
    image: "https://example.com/images/echo_dot.jpg",
  },
  {
    id: "5",
    text: "Roku Streaming Stick+",
    price: 49.99,
    image: "https://example.com/images/roku_stick.jpg",
  },
  {
    id: "6",
    text: "TP-Link Kasa Smart Plug",
    price: 19.99,
    image: "https://example.com/images/tp_link_kasa.jpg",
  },
  {
    id: "7",
    text: "SanDisk 128GB Ultra Dual Drive",
    price: 24.99,
    image: "https://example.com/images/sandisk_dual_drive.jpg",
  },
  {
    id: "8",
    text: "Xiaomi Mi Band 6",
    price: 44.99,
    image: "https://example.com/images/mi_band_6.jpg",
  },
  {
    id: "9",
    text: "Amazon Fire TV Stick",
    price: 39.99,
    image: "https://example.com/images/fire_tv_stick.jpg",
  },
  {
    id: "10",
    text: "Google Chromecast",
    price: 29.99,
    image: "https://example.com/images/chromecast.jpg",
  },
  {
    id: "11",
    text: "JBL Go 3 Portable Speaker",
    price: 39.99,
    image: "https://example.com/images/jbl_go_3.jpg",
  },
  {
    id: "12",
    text: "RAVPower Portable Charger 10000mAh",
    price: 29.99,
    image: "https://example.com/images/ravpower_charger.jpg",
  },
  {
    id: "13",
    text: "AUKEY USB C Charger 18W",
    price: 19.99,
    image: "https://example.com/images/aukey_charger.jpg",
  },
  {
    id: "14",
    text: "Kasa Smart Light Bulb",
    price: 14.99,
    image: "https://example.com/images/kasa_smart_bulb.jpg",
  },
  {
    id: "15",
    text: "Tile Mate (2020)",
    price: 24.99,
    image: "https://example.com/images/tile_mate.jpg",
  },
  {
    id: "16",
    text: "Sony MDRZX110NC Noise Cancelling Headphones",
    price: 28.99,
    image: "https://example.com/images/sony_mdrzx110nc.jpg",
  },
  {
    id: "17",
    text: "Bose SoundSport Wireless Earbuds",
    price: 99.99,
    image: "https://example.com/images/bose_soundsport.jpg",
  },
  {
    id: "18",
    text: "Anker PowerLine+ II Lightning Cable",
    price: 16.99,
    image: "https://example.com/images/anker_lightning_cable.jpg",
  },
  {
    id: "19",
    text: "TP-Link AC750 WiFi Extender",
    price: 29.99,
    image: "https://example.com/images/tp_link_wifi_extender.jpg",
  },
  {
    id: "20",
    text: "iOttie Easy One Touch 4 Car Mount",
    price: 24.99,
    image: "https://example.com/images/iottie_car_mount.jpg",
  },
];

function getProductData(id) {
  let productData = productsArr.find((product) => product.id === id);
  return productData;
}

// export const  createContext({
//     items: [],
//     getProductData: () => {}
// })

export { productsArr };
