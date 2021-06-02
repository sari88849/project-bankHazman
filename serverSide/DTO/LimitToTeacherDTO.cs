using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
  public  class LimitToTeacherDTO
    {
        public int CodeLimitToTeacher { get; set; }
        public int CodeLimit { get; set; }
        public int CodeTeacher { get; set; }
        public Nullable<double> TryYear { get; set; }

        public static LimitToTeacherDTO ToLimitToTeacherDTO(LimitToTeacher c)
        {
            LimitToTeacherDTO c1 = new LimitToTeacherDTO();
            c1.CodeLimitToTeacher = c.CodeLimitToTeacher;
            c1.CodeLimit = c.CodeLimit;
            c1.CodeTeacher = c.CodeTeacher;
            c1.TryYear = c.TryYear;

            return c1;

        }
        public static LimitToTeacher ToLimitToTeacher(LimitToTeacherDTO c)
        {
            LimitToTeacher c1 = new LimitToTeacher();
            c1.CodeLimitToTeacher = c.CodeLimitToTeacher;
            c1.CodeLimit = c.CodeLimit;
            c1.CodeTeacher = c.CodeTeacher;
            c1.TryYear = c.TryYear;

            return c1;

        }
        public static List<LimitToTeacher> ToListLimitToTeacher(List<LimitToTeacherDTO> listc)
        {
            List<LimitToTeacher> lc = new List<LimitToTeacher>();
            foreach (var item in listc)
            {
                lc.Add(ToLimitToTeacher(item));
            }
            return lc;
        }
        public static List<LimitToTeacherDTO> ToListLimitToTeacherDTO(List<LimitToTeacher> listc)
        {
            List<LimitToTeacherDTO> lc = new List<LimitToTeacherDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToLimitToTeacherDTO(item));
            }
            return lc;
        }

    }
}
