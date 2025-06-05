import PocketBase from 'pocketbase';

const pb = new PocketBase('https://pocketbase.victor-landwerlin.fr') ;

async function getAllThemes() {
  try {
    let records = await pb.collection('theme').getFullList();
    records = records.map((record) => {
            record.img = pb.files.getURL(record, record.image);
            return record;
        });
    return records;
  } catch (error) {
    console.error('Error fetching themes:', error);
    throw error;
  }
}

async function getTattoosByTheme(themeId) {
  try {
    let records = await pb.collection('tatouage').getFullList({
      filter: `theme = "${themeId}"`,
      expand: 'theme'
    });
    
    records = records.map((record) => {
      record.img = pb.files.getURL(record, record.image);
      return record;
    });
    
    return records;
  } catch (error) {
    console.error('Error fetching tattoos by theme:', error);
    throw error;
  }
}

// Fonction pour récupérer un thème spécifique
async function getThemeById(themeId) {
  try {
    const record = await pb.collection('theme').getOne(themeId);
    record.img = pb.files.getURL(record, record.image);
    return record;
  } catch (error) {
    console.error('Error fetching theme:', error);
    throw error;
  }
}

async function getTattooById(tattooId) {
  try {
    const record = await pb.collection('tatouage').getOne(tattooId, {
      expand: 'theme'
    });
    record.img = pb.files.getURL(record, record.image);
    return record;
  } catch (error) {
    console.error('Error fetching tattoo:', error);
    throw error;
  }
}

export { getTattoosByTheme as a, getAllThemes as b, getTattooById as c, getThemeById as g };
