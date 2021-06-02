using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
   public class RecommendationDTO
    {
        public int CodeRecommendation { get; set; }
        public Nullable<int> CodeLimitToTeacher { get; set; }
        public string RecommendationText { get; set; }
        public Nullable<bool> Reply { get; set; }
        public Nullable<bool> NotTime { get; set; }
        public Nullable<int> CodeUser { get; set; }

        public static RecommendationDTO ToRecommendationDTO(Recommendation c)
        {
            RecommendationDTO c1 = new RecommendationDTO();
            c1.CodeRecommendation = c.CodeRecommendation;
            c1.CodeLimitToTeacher = c.CodeLimitToTeacher;
            c1.RecommendationText = c.RecommendationText;
            c1.Reply = c.Reply;
            c1.NotTime = c.NotTime;
            c1.CodeUser = c.CodeUser;

            return c1;

        }
        public static Recommendation ToRecommendation(RecommendationDTO c)
        {
            Recommendation c1 = new Recommendation();
            c1.CodeRecommendation = c.CodeRecommendation;
            c1.CodeLimitToTeacher = (int)c.CodeLimitToTeacher;
            c1.RecommendationText = c.RecommendationText;
            c1.Reply = c.Reply;
            c1.NotTime = c.NotTime;
            c1.CodeUser = c.CodeUser;
            return c1;
        }
        public static List<Recommendation> ToListRecommendation(List<RecommendationDTO> listc)
        {
            List<Recommendation> lc = new List<Recommendation>();
            foreach (var item in listc)
            {
                lc.Add(ToRecommendation(item));
            }
            return lc;
        }
        public static List<RecommendationDTO> ToListRecommendationDTO(List<Recommendation> listc)
        {
            List<RecommendationDTO> lc = new List<RecommendationDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToRecommendationDTO(item));
            }
            return lc;
        }

    }
}
