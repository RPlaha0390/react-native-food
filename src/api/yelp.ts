import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer w-0L7AyTyFZ_EVmAiAlBSvyz_0B-MbQg_Gl90b-FBinnR_xs4L0Ne6NMCT1MVkjEcSuJUeWoBwLesQj-7bii_aDykDvhW_i9uqLUrIurW5tgkw38AcieRaQvDllVXXYx'
  }
});
