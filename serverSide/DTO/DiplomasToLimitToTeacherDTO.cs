using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;

namespace DTO
{
   public class DiplomasToLimitToTeacherDTO
    {
        public int CodeDiplomaToLimitToTeacher { get; set; }
        public int CodeLimitToTeacher { get; set; }
        public string Diploma { get; set; }

        public static DiplomasToLimitToTeacherDTO ToDiplomasToLimitToTeacherDTO(DiplomasToLimitToTeacher c)
        {
            DiplomasToLimitToTeacherDTO c1 = new DiplomasToLimitToTeacherDTO();
            c1.CodeDiplomaToLimitToTeacher = c.CodeDiplomaToLimitToTeacher;
            c1.CodeLimitToTeacher = c.CodeLimitToTeacher;
            c1.Diploma = c.Diploma;
            return c1;

        }
        public static DiplomasToLimitToTeacher ToDiplomasToLimitToTeacher(DiplomasToLimitToTeacherDTO c)
        {
            DiplomasToLimitToTeacher c1 = new DiplomasToLimitToTeacher();
            c1.CodeDiplomaToLimitToTeacher = c.CodeDiplomaToLimitToTeacher;
            c1.CodeLimitToTeacher = c.CodeLimitToTeacher;
            c1.Diploma = c.Diploma;
            return c1;
        }
        public static List<DiplomasToLimitToTeacher> ToListDiplomasToLimitToTeacher(List<DiplomasToLimitToTeacherDTO> listc)
        {
            List<DiplomasToLimitToTeacher> lc = new List<DiplomasToLimitToTeacher>();
            foreach (var item in listc)
            {
                lc.Add(ToDiplomasToLimitToTeacher(item));
            }
            return lc;
        }
        public static List<DiplomasToLimitToTeacherDTO> ToListDiplomasToLimitToTeacherDTO(List<DiplomasToLimitToTeacher> listc)
        {
            List<DiplomasToLimitToTeacherDTO> lc = new List<DiplomasToLimitToTeacherDTO>();
            foreach (var item in listc)
            {
                lc.Add(ToDiplomasToLimitToTeacherDTO(item));
            }
            return lc;
        }

    }
}
