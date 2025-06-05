import PocketBase from 'pocketbase' ;
const pb = new PocketBase('https://pocketbase.victor-landwerlin.fr') ;

export async function getAllThemes() {
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

export async function getTattoosByTheme(themeId) {
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
export async function getThemeById(themeId) {
  try {
    const record = await pb.collection('theme').getOne(themeId);
    record.img = pb.files.getURL(record, record.image);
    return record;
  } catch (error) {
    console.error('Error fetching theme:', error);
    throw error;
  }
}

export async function getTattooById(tattooId) {
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

export async function getTattooIAByUser(userId) {
  try {
    let records = await pb.collection('tatouage_ia').getFullList({
      filter: `utilisateur = "${userId}"`
    });
    
    records = records.map((record) => {
      record.img = pb.files.getURL(record, record.image);
      return record;
    });
    
    return records;
  } catch (error) {
    console.error('Error fetching AI tattoos by user:', error);
    throw error;
  }
}