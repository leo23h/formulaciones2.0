import { Injectable } from "@angular/core";
import { Formula } from "../../shared/models/formula.interface";

@Injectable({
  providedIn: "root",
})
export class FormulacionService {
  constructor() {}

  obtenerFormulaciones(): Formula[] {
    return [
      {
        id: 1,
        nombre: "CLEANER GEL",
        image: "assets/home/home_cleaner.jpg",
        imageColor: "253, 173, 153, 0.4",
        color: "#FDAD99",
        lineColor: "#F3A974",
        headerTable: "#FFC9BC",
        cardHeader: "#FDAD99",
        imageHeader: "assets/Internas/cab_cleaner_gel.jpg",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Agua",
                INCI: "Water",
                uso: "58.00",
                fabricante: "",
              },
              {
                nombre: "Carbopol® Fusion S-20 Polymer",
                INCI: "Starch Acetate/Adipate (and) Citric Acid",
                uso: "14.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Lauroat® EC ",
                INCI: "Sodium Lauroyl Oat Amino Acids",
                uso: "15.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "SalSphere® Even Skin",
                INCI: "PEG-8, Salicylic Acid, Isostearamidopropyl Ethyldimonium Ethosulfate, Sodium Hydroxide, Isostearamidopropyl Dimethylamine, Isostearic Acid, Propylene Glycol, Water/Aqua/Eau, Carthamus Tinctorius (Safflower) Seed Oil, Olea Europaea (Olive) Fruit Oil",
                uso: "3.00",
                fabricante: "Salvona",
              },
              {
                nombre: "Hidroxido Sodio 20%",
                INCI: "",
                uso: "q.p.s",
                fabricante: "",
              },
            ],
          },
          {
            fase: "B",
            compuestos: [
              {
                nombre: "Hydramol™ PGPL Ester",
                INCI: "PEG/PPG-8/3 Laurate",
                uso: "3.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Merquat™ 3330PR polymer",
                INCI: "Polyquaternium-39",
                uso: "4.00",
                fabricante: "Lubrizol",
              },
            ],
          },
          {
            fase: "C",
            compuestos: [
              {
                nombre: "Oleobiota™",
                INCI: "Water, Glycerin, Eugenia uniflora leaf extract",
                uso: "2.00",
                fabricante: "Evonik",
              },
              {
                nombre: " Novascrub™ Arroz",
                INCI: "Oryzaba Sativa Powder, Actinidia Chinensis Fruit Extract",
                uso: "1.00",
                fabricante: "Novachem",
              },
              {
                nombre: "euxyl™ eco 910 ",
                INCI: "Benzyl Alcohol (and) Cymbopogon Flexuosus Leaf Oil (and) Tocopherol",
                uso: "1.00",
                fabricante: "Ashland",
              },
              {
                nombre: "Tween 80",
                INCI: "",
                uso: "0.17",
                fabricante: "",
              },
              {
                nombre: "Té verde",
                INCI: "Parfum",
                uso: "0.08",
                fabricante: "Firmenich",
              },
              {
                nombre: "Hidroxido Sodio 20%",
                INCI: "",
                uso: "q.p.s",
                fabricante: "",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        nombre: "SERUM SHINNING DAY",
        image: "assets/home/home_serum_day.jpg",
        imageColor: "228, 153, 253, 0.5",
        color: "#E499FD",
        lineColor: "#E499FD",
        headerTable: "#E499FD",
        cardHeader: "#E6B5F7",
        imageHeader: "assets/Internas/cab_serum_day.jpg",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Agua",
                INCI: "Water",
                uso: "79.13",
                fabricante: "",
              },
              {
                nombre: "Activonol - 3",
                INCI: "Propanediol",
                uso: "3.00",
                fabricante: "Activon",
              },
              {
                nombre: "Alantoína",
                INCI: "Alantoine",
                uso: "0.30",
                fabricante: "Deretil",
              },
              {
                nombre: "Carbopol® Ultrez 30 polymer,",
                INCI: "Carbomer",
                uso: "0.45",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Sensiva™ sc 83 multifunctional",
                INCI: "Caprylhydroxamic acid, caprylyl glycol, propanediol",
                uso: "1.00",
                fabricante: "Ashland",
              },
              {
                nombre: "Hydramol™ PGPL Ester,",
                INCI: "PEG/PPG-8/3 Laurate",
                uso: "3.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Liposomal HA",
                INCI: "Water, Hydrolyzed Sodium Hyaluronate, Sodium Hyaluronate,Phosphatidylcholine, Xanthan Gum, Potassium Sorbate,Sodium Benzoate, Citric Acid",
                uso: "3.00",
                fabricante: "Lipomize",
              },
              {
                nombre: "Red Alga Gel ® EC",
                INCI: "Ahnfeltiopsis concinna Extract",
                uso: "5.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Azeloglicina®",
                INCI: "Potassium Azeloyl Diglycinate",
                uso: "3.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Hydraskin™",
                INCI: "Saccharomyces lysate filtrate",
                uso: "2.00",
                fabricante: "Novachem",
              },
              {
                nombre: "Hidroxido de Sodio 20%",
                INCI: "",
                uso: "q.s",
                fabricante: "",
              },
            ],
          },
          {
            fase: "B",
            compuestos: [
              {
                nombre: "Tween 80",
                INCI: "",
                uso: "0.08",
                fabricante: "",
              },
              {
                nombre: "Good girl",
                INCI: "Parfum",
                uso: "0.04",
                fabricante: "Firmenich",
              },
            ],
          }
        ], 
      },
      {
        id: 3,
        nombre: "SERUM READY TO SLEEP",
        image: "assets/home/home_ready.jpg",
        imageColor: "255, 177, 215, 0.61",
        color: "#FFB1D7",
        lineColor: "#FF8EC5",
        headerTable: "#FF8EC5",
        cardHeader: "#FFC5E1",
        imageHeader: "assets/Internas/cab_serum_sleep.jpg",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Agua",
                INCI: "Water",
                uso: "83.9",
                fabricante: "",
              },
              {
                nombre: "Activonol - 3",
                INCI: "Propanediol",
                uso: "3.00",
                fabricante: "Activon",
              },
              {
                nombre: "Alantoína",
                INCI: "Alantoine",
                uso: "0.3",
                fabricante: "Deretil",
              },
              {
                nombre: "Carbopol® Ultrez 30 polymer",
                INCI: "Carbomer",
                uso: "0.6",
                fabricante: "Lubrizol",
              },
              {
                nombre: "sensiva™ sc 83 multifunctional",
                INCI: "Caprylhydroxamic acid, caprylyl glycol, propanediol",
                uso: "0.3",
                fabricante: "Ashland",
              },
              {
                nombre: "Hydramol™ PGPL Ester",
                INCI: "PEG/PPG-8/3 Laurate",
                uso: "3.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Azeloglicina®",
                INCI: "Citrus Aurantium Sinensis Peel Extract, Citrus Reticulata Peel Extract",
                uso: "3.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Liposomal Vitamin C",
                INCI: "Water, Glycerin, Ascorbic Acid, Alcohol, Sodium Hydroxide, Phosohatidykcholine, Tocopheryl Acetate, Disodium EDTA, Xanthan GumANTHAN GUM",
                uso: "2.00",
                fabricante: "Lipomize",
              },
              {
                nombre: "Liposomal Resveratrol",
                INCI: "Propylene Glycol & Water & Alcohol & Resveratrol &CARNITINE TARTRATE & PHOSPHOLIPIDS & TOCOPHERYL A",
                uso: "3.00",
                fabricante: "Lipomize",
              },
              {
                nombre: "Hidroxido de Sodio 50%",
                INCI: "",
                uso: "",
                fabricante: "",
              },
            ],
          },
          {
            fase: "B",
            compuestos: [
              {
                nombre: "Tween 80",
                INCI: "",
                uso: "0.7",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Jennifer Lawrence",
                INCI: "Parfum",
                uso: "0.3",
                fabricante: "Firmenich",
              },
            ],
          }
        ], 
      },
      {
        id: 4,
        nombre: "MANGO BUDIN CARE",
        image: "assets/home/home_mango_budin.jpg",
        imageColor: "134, 150, 231, 0.62",
        color: "#8696E7",
        lineColor: "#8696E7",
        headerTable: "#ABB9FF",
        cardHeader: "#ABB9FF",
        imageHeader: "assets/Internas/cab_mango_budin.jpg",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Agua desionizada",
                INCI: "Aqua",
                uso: "73.30",
                fabricante: "",
              },
              {
                nombre: "EDTA",
                INCI: "Disodium EDTA",
                uso: "0.10",
                fabricante: "",
              },
              {
                nombre: "Activonol",
                INCI: "Propanediol",
                uso: "5.00",
                fabricante: "Activon",
              },
              {
                nombre: "Novemer™ CS Polymer",
                INCI: "Acrylates/C10-30 Alkyl Acrylate Crosspolymer",
                uso: "1.50",
                fabricante: "Lubrizol",
              }
            ],
          },
          {
            fase: "B",
            compuestos: [
              {
                nombre: "Schercemol™ 318 Ester",
                INCI: "Diisopropyl Adipate",
                uso: "8.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol™ 318 Ester",
                INCI: "Isostearyl Isostearate",
                uso: "3.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol™ NGDO  Ester",
                INCI: "Neopentyl Glycol Diheptanoate",
                uso: "4.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "AlgaPūr™ HSHO algae oil",
                INCI: "Schizochytrium Sp. Oil (nombre INCI del aceite de algas DHA)",
                uso: "2.00",
                fabricante: "Lubrizol",
              },
            ],
          },
          {
            fase: "C",
            compuestos: [
              {
                nombre: "Coenzima Q10",
                INCI: "Ubiquinone",
                uso: "2.00",
                fabricante: "Lipomize",
              },
              {
                nombre: "euxyl™ k 830",
                INCI: "Ethylhexylglycerin (and) Phenylpropanol",
                uso: "0.50",
                fabricante: "Ashland",
              },
              {
                nombre: "Mango",
                INCI: "Parfum (Fragrance)",
                uso: "0.60",
                fabricante: "Firmenich",
              }
            ],
          }
        ], 
      },
      {
        id: 5,
        nombre: "COCO MOUSE BODY",
        image: "assets/home/home_coco.jpg",
        imageColor: "60, 221, 242, 0.4",
        color: "#2BA9ED",
        lineColor: "#0EA9FC",
        headerTable: "#0EA9FC",
        cardHeader: "#94D6F9",
        imageHeader: "assets/Internas/cab_coco_mouse.jpg",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Aqua",
                INCI: "Water",
                uso: "65.00",
                fabricante: "",
              },
              {
                nombre: "euxyl™ k 900",
                INCI: "Benzyl Alcohol/ Ethylhexylglycerin",
                uso: "1.00",
                fabricante: "Ashland",
              },
              {
                nombre: "Activonol-3",
                INCI: "Propanediol",
                uso: "3.00",
                fabricante: "Activon",
              },
              {
                nombre: "Novemer™ CS Polymer",
                INCI: "Acrylates/C10-30 Alkyl Acrylate Crosspolymer",
                uso: "1.50",
                fabricante: "Lubrizol",
              },
              {
                nombre: "D-panthenol",
                INCI: "D-panthenol",
                uso: "1.00",
                fabricante: "Xinfu",
              }
            ],
          },
          {
            fase: "B",
            compuestos: [
              {
                nombre: "Phytocream®2000 ",
                INCI: "Potassium Palmitoyl Hydrolyzed Wheat Protein, Glyceryl Stearate, Cetearyl Alcohol.",
                uso: "7.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Cetyl alcohol",
                INCI: "Cetyl alcohol",
                uso: "2.00",
                fabricante: "",
              },
              {
                nombre: "Kester Wax K24",
                INCI: "Lauryl Laurate",
                uso: "1.00",
                fabricante: "Koster Keunen",
              },
              {
                nombre: "Cocoa Butter NF",
                INCI: "Theobroma Cacao (Cocoa) Seed Butter",
                uso: "3.00",
                fabricante: "Koster Keunen",
              },
              {
                nombre: "Schercemol™ 318 Ester",
                INCI: "Isostearyl Isostearate",
                uso: "3.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol™ DISM Ester",
                INCI: "Diisostearyl Malate",
                uso: "2.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol™ NGDO Ester",
                INCI: "Neopentyl Glycol Diethylhexanoate",
                uso: "2.00",
                fabricante: "Lubrizol",
              },
            ],
          },
          {
            fase: "C",
            compuestos: [
              {
                nombre: "Jojoba Oil",
                INCI: "Simmondsia Chinensis (Jojoba) Seed Oil",
                uso: "2.00",
                fabricante: "Stantfold",
              },
              {
                nombre: "SilSense™ Bio 5 emollient",
                INCI: "C9-12 Alkane",
                uso: "2.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "AlgaPūr™ HSHO algae oil",
                INCI: "Triolein / Alga oil",
                uso: "2.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Azeloglicina®",
                INCI: "Potassium Azeloyl Diglycinate",
                uso: "3.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Oleobiota™",
                INCI: "Water (and) Glycerin (and) Eugenia Uniflora Leaf Extract",
                uso: "2.00",
                fabricante: "Evonik",
              },
              {
                nombre: "Red Alga Gel ® EC",
                INCI: "Ahnfeltiopsis concinna Extract",
                uso: "2.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Cosmethicone® 6061 Elastomer",
                INCI: "Silica, dimethicone, vinyl dimethicone crosspolymer",
                uso: "3.00",
                fabricante: "Biomax",
              }
            ],
          },
          {
            fase: "D",
            compuestos: [
              {
                nombre: "Hidroxido de Sodio 20%",
                INCI: "",
                uso: "q.s.p",
                fabricante: "",
              },
              {
                nombre: "Cocolight",
                INCI: "Parfum",
                uso: "0.40",
                fabricante: "Firmenich",
              }
              
            ],
          }
        ], 
      },
      {
        id: 6,
        nombre: "2 IN 1 HONEY PLEX SHAMPOO",
        image: "assets/home/home_2in1_honey.jpg",
        imageColor: "92, 217, 177, 0.4",
        color: "#5CD9B1",
        lineColor: "#5CD9B1",
        headerTable: "#5CD9B1",
        cardHeader: "#A7F7DE",
        imageHeader: "assets/Internas/cab_2in1_honey.jpg",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Aqua",
                INCI: "Water",
                uso: "35.50",
                fabricante: "",
              },
              {
                nombre: "Carbopol® Fusion S-20 Polymer",
                INCI: "Starch Acetate/Adipate (and) Citric Acid",
                uso: "15.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Vegequat® ",
                INCI: "Cocodimonium Hydroxypropyl Hydrolyzed Wheat Protein",
                uso: "2.50",
                fabricante: "Sinerga",
              },
              {
                nombre: "Lauroat® EC",
                INCI: "Sodium Lauroyl Oat Amino Acids",
                uso: "30.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Natifoam",
                INCI: "Cocoyl Proline, Caprylyl/Capryl Glucoside, Sodium Cocoyl Isethionate",
                uso: "6.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Glucamate™ LT thickener",
                INCI: "PEG-120 Methyl Glucose Trioleate, Propylene Glycol (and) Water",
                uso: "2.20",
                fabricante: "Lubrizol",
              }
            ],
          },
          {
            fase: "B",
            compuestos: [
              {
                nombre: "Extracell™ Plex",
                INCI: "Saccharomyces lysate",
                uso: "3.00",
                fabricante: "Novachem",
              },
              {
                nombre: " Royal Elixir™",
                INCI: "Water, Glycerin, Royal Jelly Extract.",
                uso: "3.00",
                fabricante: "Novachem",
              },
              {
                nombre: "Merquat™ PLUS 3330 Polymer",
                INCI: "Polyquaternium-39",
                uso: "1.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Merquat™ 2003 Polymer",
                INCI: " Polyquaternium-53",
                uso: "1.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Merquat™ 295 Polymer",
                INCI: "Polyquaternium-22",
                uso: "1.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "euxyl™ k 900",
                INCI: "Benzyl Alcohol/ Ethylhexylglycerin",
                uso: "0.50",
                fabricante: "Ashland",
              },
              {
                nombre: "Hidroxido de Sodio 20%",
                INCI: "",
                uso: "q.s",
                fabricante: "",
              },
              {
                nombre: "Oatmil",
                INCI: "Parfum",
                uso: "4.00",
                fabricante: "Firmenich",
              },
            ],
          }
        ], 
      },
      {
        id: 7,
        nombre: "2 IN 1 NUTRI CARE OIL",
        image: "assets/home/home_nutri.jpg",
        imageColor: "60, 221, 242, 0.4",
        color: "#3CDDF2",
        lineColor: "#3CDDF2",
        headerTable: "#3CDDF2",
        cardHeader: "#9EF4FF",
        imageHeader: "assets/Internas/cab_nutri_care_oil.jpg",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "AlgaPūr™ HSHO algae oil",
                INCI: "Triolein / Alga oil",
                uso: "25.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol™ LL Ester",
                INCI: "Lauryl Lactate",
                uso: "20.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol™ NGDO  Ester",
                INCI: "Neopentyl Glycol Diethylhexanoate",
                uso: "15.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol™ CO Ester",
                INCI: "Cetyl Ethyhexanoate",
                uso: "20.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Oilkemia™ 5S polymer",
                INCI: "Caprylic/Capric Triglyceride (and) Polyurethane-79",
                uso: "1.20",
                fabricante: "Lubrizol",
              }
            ],
          },
          {
            fase: "B",
            compuestos: [
              {
                nombre: "HA-OIL",
                INCI: "Ricinus communis seed oil, sorbitan olivate, sodium hyaluronate, caproic acid",
                uso: "1.50",
                fabricante: "Contipro",
              },
              {
                nombre: "Novaoil™ Coco",
                INCI: "Ahnfeltiopsis concinna Extract",
                uso: "5.00",
                fabricante: "Novachem",
              },
              {
                nombre: "Argan Oil Organic Deodorised",
                INCI: "Argan oilArgania Spinosa (Argan) Kernel Oil",
                uso: "5.00",
                fabricante: "Stanfold",
              },
              {
                nombre: "Almond Oil Sweet Refined",
                INCI: "Prunus Amygdalus Dulcis Oil.",
                uso: "5.00",
                fabricante: "Stanfold",
              },
              {
                nombre: "Hemp Oil Refined",
                INCI: "Cannabis Sativa (Seed Oil)",
                uso: "1.50",
                fabricante: "Stanfold",
              }
            ],
          },
          {
            fase: "C",
            compuestos: [
              {
                nombre: "NaturOlive OA",
                INCI: "Olea europaea leaf extract  oleanolic acid",
                uso: "0.30",
                fabricante: "Deretil",
              }
            ]
          },
          {
            fase: "D",
            compuestos: [
              {
                nombre: "Caramelized Caju",
                INCI: "Parfum",
                uso: "0.5",
                fabricante: "Firmenich",
              }
            ]
          },
          
        ], 
      },
      {
        id: 8,
        nombre: "MILKSHAKE HAIR TREATMENT",
        image: "assets/home/home_coco.jpg",
        imageColor: "59, 252, 243, 0.4",
        color: "#3BFCF3",
        lineColor: "#3CDDF2",
        headerTable: "#3BFCF3",
        cardHeader: "#4EEBE3", 
        imageHeader: "assets/Internas/cab_hairtra.jpg",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Agua",
                INCI: "Water",
                uso: "53.2",
                fabricante: "",
              },
              {
                nombre: "Activonol-3",
                INCI: "Propanediol",
                uso: "0.50",
                fabricante: "Activon",
              },
              {
                nombre: "EDTA",
                INCI: "Disodium EDTA",
                uso: "0.50",
                fabricante: "",
              }
            ],
          },
          {
            fase: "B",
            compuestos: [
              {
                nombre: "Alcohol cetilico",
                INCI: "Alcohol cetilico",
                uso: "5.0",
                fabricante: "",
              },
              {
                nombre: "Phytocream® 2000",
                INCI: "Potassium Palmitoyl Hydrolyzed Wheat Protein, Glyceryl Stearate, Cetearyl Alcohol.",
                uso: "10.0",
                fabricante: "Sinerga",
              },
              {
                nombre: "Shea Butter",
                INCI: "Butyrospermum Parkii (Shea Butter) Fruit",
                uso: "2.0",
                fabricante: "Terry Labs",
              }
            ],
          },
          {
            fase: "C",
            compuestos: [
              {
                nombre: "Capilmax™",
                INCI: "Water (Aqua), Propylene glycol, Alcohol, Sodium PCA, Sodium Lactate, Arginine, Aspartic Acid, Pca, G",
                uso: "5.0",
                fabricante: "Novachem",
              },
              {
                nombre: "CapilAcid™",
                INCI: "Water, Glycerin, Aristotelia Chilensis Fruit Extract",
                uso: "5.0",
                fabricante: "Evonik",
              },
              {
                nombre: "Extracell™ Plex",
                INCI: "Saccharomyces lysate",
                uso: "5.0",
                fabricante: "Novachem",
              },
              {
                nombre: "Hair App",
                INCI: "Lysine Carboxymethyl Cysteinate",
                uso: "3.0",
                fabricante: "Sinerga",
              },
              {
                nombre: " Merquat™ 500PR Polymer",
                INCI: "POLICUATERNIUM 7",
                uso: "0.3",
                fabricante: "Lubrizol",
              }
            ]
          },
          {
            fase: "D",
            compuestos: [
              {
                nombre: "Schercemol™ NGDO Ester",
                INCI: "Neopentyl Glycol Diethylhexanoate",
                uso: "4.0",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Cosmethicone® SF 906",
                INCI: "Dimethicone",
                uso: "4.0",
                fabricante: "Biomax",
              },
              {
                nombre: "Cosmethicone® 6061 Elastomer",
                INCI: "Silica, dimethicone, vinyl dimethicone crosspolymer",
                uso: "1.0",
                fabricante: "Biomax",
              }
            ]
          },
          {
            fase: "E",
            compuestos: [
              {
                nombre: "euxyl™ k 830",
                INCI: "Phenoxyethanol, Ethylhexylglycerin, Octenidine HCl",
                uso: "0.5",
                fabricante: "Ashland",
              },
              {
                nombre: "Granada milk shake",
                INCI: "Perfum",
                uso: "1.0",
                fabricante: "Firmenich",
              }
            ]
          },
          
        ], 
      }
    ];
  }
}
