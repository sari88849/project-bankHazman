using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BL
{
 //   Recommendation
   public class RecommendationBL
    {
        //שליפת ההמלצות
        public static List<RecommendationDTO> getRecommendation(int limit)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                return RecommendationDTO.ToListRecommendationDTO(RecommendationDB.getRecommendation(limit));

            }

        }


        public static bool AddRecommendation(RecommendationDTO l)
        {
            using (LoveToLerningEntities db = new LoveToLerningEntities())
            {
                RecommendationDB.AddRecommendation(RecommendationDTO.ToRecommendation(l));
                return true;
            }
        }

        public static int getCountReply(int codeuser)
        {
            using (LoveToLerningEntities db=new LoveToLerningEntities())
            {
                var q = 0;
                foreach (var item in db.Recommendation)
                {
                    if (item.CodeUser == codeuser && item.Reply==true)
                    {
                        q++;
                    }
                }
                return q;
            }
        }


    }
}

