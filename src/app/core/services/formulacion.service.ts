import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FormulacionService {
  constructor() {}

  obtenerFormulaciones() {
    return [
      {
        id: 1,
        nombre: "CLEANER GEL",
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
                nombre: "Carbopol Fusion s-20",
                INCI: "Starch Acetate/Adipate (and) Citric Acid",
                uso: "14.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Lauroat",
                INCI: "Sodium Lauroyl Oat Amino Acids",
                uso: "15.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Salsphere Even Skin",
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
                nombre: "Hydramol PGPL",
                INCI: "PEG/PPG-8/3 Laurate",
                uso: "3.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Meqruat 3330 pr",
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
                nombre: "Oleobiota",
                INCI: "Water, Glycerin, Eugenia uniflora leaf extract",
                uso: "2.00",
                fabricante: "Evonik",
              },
              {
                nombre: "Novascrub arroz",
                INCI: "Oryzaba Sativa Powder, Actinidia Chinensis Fruit Extract",
                uso: "1.00",
                fabricante: "Novachem",
              },
              {
                nombre: "Euxyl Eco910",
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
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Agua",
                INCI: "Water",
                uso: "79.00",
                fabricante: "",
              },
              {
                nombre: "Activonol - 3",
                INCI: "Propanediol",
                uso: "3.00",
                fabricante: "Activon",
              },
              {
                nombre: "Alantoina",
                INCI: "Alantoine",
                uso: "0.30",
                fabricante: "Deretil",
              },
              {
                nombre: "Carbopol Ultrez 30",
                INCI: "Carbomer",
                uso: "0.45",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Sensiva SC 83",
                INCI: "Caprylhydroxamic acid, caprylyl glycol, propanediol",
                uso: "1.00",
                fabricante: "Ashland",
              },
              {
                nombre: "Hydramol PGPL",
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
                nombre: "Red Alga Gel EC",
                INCI: "Ahnfeltiopsis concinna Extract",
                uso: "5.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Azeloglicina",
                INCI: "Potassium Azeloyl Diglycinate",
                uso: "3.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Hydraskin",
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
        nombre: "SERUM SHINNING TO SLEEP",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Agua",
                INCI: "Water",
                uso: "83.09",
                fabricante: "",
              },
              {
                nombre: "Activonol - 3",
                INCI: "Propanediol",
                uso: "3.00",
                fabricante: "Activon",
              },
              {
                nombre: "Alantoina",
                INCI: "Alantoine",
                uso: "0.30",
                fabricante: "Deretil",
              },
              {
                nombre: "Carbopol Ultrez 30",
                INCI: "Carbomer",
                uso: "0.60",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Sensiva SC 83",
                INCI: "Caprylhydroxamic acid, caprylyl glycol, propanediol",
                uso: "0.30",
                fabricante: "Ashland",
              },
              {
                nombre: "Hydramol PGPL",
                INCI: "PEG/PPG-8/3 Laurate",
                uso: "3.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Azeloglicina",
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
                uso: "0.70",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Jennifer Lawrence",
                INCI: "Parfum",
                uso: "0.30",
                fabricante: "Firmenich",
              },
            ],
          }
        ], 
      },
      {
        id: 4,
        nombre: "MANGO BUDIN CARE",
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
                nombre: "Novemer CS",
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
                nombre: "Schercemol 318 Ester",
                INCI: "Diisopropyl Adipate",
                uso: "8.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol 1818 Ester",
                INCI: "Isostearyl Isostearate",
                uso: "3.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol NGDO",
                INCI: "Neopentyl Glycol Diheptanoate",
                uso: "4.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Algapure",
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
                nombre: "Euxyl k830",
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
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Agua desionizada",
                INCI: "Water",
                uso: "65.00",
                fabricante: "",
              },
              {
                nombre: "Euxyl K900",
                INCI: "Benzyl Alcohol/ Ethylhexylglycerin",
                uso: "1.00",
                fabricante: "Ashland",
              },
              {
                nombre: "Activonol",
                INCI: "Propanediol",
                uso: "3.00",
                fabricante: "Activon",
              },
              {
                nombre: "Novemer CS",
                INCI: "Acrylates/C10-30 Alkyl Acrylate Crosspolymer",
                uso: "",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Dpanthenol",
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
                nombre: "Phytocream 2000",
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
                nombre: "Schercemol 1818",
                INCI: "Isostearyl Isostearate",
                uso: "",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol DISM",
                INCI: "Diisostearyl Malate",
                uso: "2.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol NGDO",
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
                nombre: "Silsense bio 5",
                INCI: "C9-12 Alkane",
                uso: "2.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Algapur HSHO",
                INCI: "Triolein / Alga oil",
                uso: "2.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Azeloglicina",
                INCI: "Potassium Azeloyl Diglycinate",
                uso: "3.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Oleobiota",
                INCI: "Water (and) Glycerin (and) Eugenia Uniflora Leaf Extract",
                uso: "2.00",
                fabricante: "Evonik",
              },
              {
                nombre: "Red alga Gel EC",
                INCI: "Ahnfeltiopsis concinna Extract",
                uso: "2.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Cosmethicone 6061 Elastomer",
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
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Agua desionizada",
                INCI: "Water",
                uso: "58.00",
                fabricante: "",
              },
              {
                nombre: "Carbopol Fusion",
                INCI: "Starch Acetate/Adipate (and) Citric Acid",
                uso: "14.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Vegequat",
                INCI: "Cocodimonium Hydroxypropyl Hydrolyzed Wheat Protein",
                uso: "15.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Lauroat",
                INCI: "Sodium Lauroyl Oat Amino Acids",
                uso: "",
                fabricante: "Sinerga",
              },
              {
                nombre: "Natifoam",
                INCI: "Cocoyl Proline, Caprylyl/Capryl Glucoside, Sodium Cocoyl Isethionate",
                uso: "15.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Glucamate LT",
                INCI: "PEG-120 Methyl Glucose Trioleate, Propylene Glycol (and) Water",
                uso: "",
                fabricante: "Lubrizol",
              }
            ],
          },
          {
            fase: "B",
            compuestos: [
              {
                nombre: "Extracell plex",
                INCI: "Saccharomyces lysate",
                uso: "3.00",
                fabricante: "Novachem",
              },
              {
                nombre: "Royal Elixir",
                INCI: "Water, Glycerin, Royal Jelly Extract.",
                uso: "4.00",
                fabricante: "Novachem",
              },
              {
                nombre: "Merquat 3330",
                INCI: "Polyquaternium-39",
                uso: "4.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Merquat 2003",
                INCI: " Polyquaternium-53",
                uso: "4.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Merquat 295",
                INCI: "Polyquaternium-22",
                uso: "3.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Euxyl k900",
                INCI: "Benzyl Alcohol/ Ethylhexylglycerin",
                uso: "4.00",
                fabricante: "Ashland",
              },
              {
                nombre: "Hidroxido de Sodio 20%",
                INCI: "",
                uso: "4.00",
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
        nombre: "2 IN 1 HONEY PLEX SHAMPOO",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Algapur HSHO",
                INCI: "Triolein / Alga oil",
                uso: "25.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol LL",
                INCI: "Lauryl Lactate",
                uso: "20.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schercemol NGDO",
                INCI: "Neopentyl Glycol Diethylhexanoate",
                uso: "15.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Schecemol CO",
                INCI: "Cetyl Ethyhexanoate",
                uso: "20.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Oilkemia 5S Polymer",
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
                nombre: "HA+-OIL",
                INCI: "Ricinus communis seed oil, sorbitan olivate, sodium hyaluronate, caproic acid",
                uso: "1.50",
                fabricante: "Contipro",
              },
              {
                nombre: "Novaoil coco",
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
                nombre: "HEMP OIL REFINED",
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
                nombre: "NATUROLIVE OA",
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
                uso: "0.50",
                fabricante: "Firmenich",
              }
            ]
          },
          
        ], 
      },
      {
        id: 8,
        nombre: "MILKSHAKE HAIR TREATMENT",
        etapas: [
          {
            fase: "A",
            compuestos: [
              {
                nombre: "Agua",
                INCI: "Water",
                uso: "53.20",
                fabricante: "",
              },
              {
                nombre: "Activonol",
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
                uso: "5.00",
                fabricante: "",
              },
              {
                nombre: "Phytocreem 2000",
                INCI: "Potassium Palmitoyl Hydrolyzed Wheat Protein, Glyceryl Stearate, Cetearyl Alcohol.",
                uso: "10.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Shea butter",
                INCI: "Butyrospermum Parkii (Shea Butter) Fruit",
                uso: "2.00",
                fabricante: "Terry Labs",
              }
            ],
          },
          {
            fase: "C",
            compuestos: [
              {
                nombre: "Capilmax",
                INCI: "Water (Aqua), Propylene glycol, Alcohol, Sodium PCA, Sodium Lactate, Arginine, Aspartic Acid, Pca, G",
                uso: "5.00",
                fabricante: "Novachem",
              },
              {
                nombre: "Capilacid",
                INCI: "Water, Glycerin, Aristotelia Chilensis Fruit Extract",
                uso: "5.00",
                fabricante: "Evonick",
              },
              {
                nombre: "Extracell plex",
                INCI: "Saccharomyces lysate",
                uso: "5.00",
                fabricante: "Novachem",
              },
              {
                nombre: "Hair App",
                INCI: "Lysine Carboxymethyl Cysteinate",
                uso: "3.00",
                fabricante: "Sinerga",
              },
              {
                nombre: "Merquart 550 PR",
                INCI: "POLICUATERNIUM 7",
                uso: "0.30",
                fabricante: "Lubrizol",
              }
            ]
          },
          {
            fase: "D",
            compuestos: [
              {
                nombre: "Schercemol NGDO",
                INCI: "Neopentyl Glycol Diethylhexanoate",
                uso: "4.00",
                fabricante: "Lubrizol",
              },
              {
                nombre: "Cosmethicone SF-906",
                INCI: "Dimethicone",
                uso: "4.00",
                fabricante: "Biomax",
              },
              {
                nombre: "Cosmethicone 6061 Elastomer",
                INCI: "Silica, dimethicone, vinyl dimethicone crosspolymer",
                uso: "1.00",
                fabricante: "Biomax",
              }
            ]
          },
          {
            fase: "E",
            compuestos: [
              {
                nombre: "Euxyl K -830",
                INCI: "Phenoxyethanol, Ethylhexylglycerin, Octenidine HCl",
                uso: "0.50",
                fabricante: "Ashland",
              },
              {
                nombre: "granada milk shake",
                INCI: "Perfum",
                uso: "1.00",
                fabricante: "Firmenich",
              }
            ]
          },
          
        ], 
      }
    ];
  }
}
